import { TOPIC_GROUPS } from '@/utils/topics'
import { NextResponse } from 'next/server'
import axios from 'axios'
import { GoogleGenAI } from '@google/genai'
import { Best_Blog_SystemPrompt } from '@/utils/Best_Blog_SystemPrompt'
import { tavily } from '@tavily/core'
import { Blog_writer } from '@/utils/Blog_writer'
import { connectDB } from '@/db/db'
import { BlogModel } from '@/models/blog_model'

// Hobby plan max is 60s (300 blocks deploy on your plan)
export const maxDuration = 60
export const dynamic = 'force-dynamic'

const ai = new GoogleGenAI({
  apiKey: process.env.GEMINI_API_KEY,
})

const tavilyClient = tavily({
  apiKey: process.env.WEB_SEARCH_API_KEY,
})

const mapNewsResults = (results: any[] = []) =>
  results.slice(0, 4).map((news) => ({
    title: news.title,
    description: news.description,
    image: news.image_url,
    link: news.link,
  }))

const fetchNews = async (query: string) => {
  const { data } = await axios.get('https://newsdata.io/api/1/latest', {
    params: {
      apikey: process.env.NEWS_API_KEY,
      q: query,
    },
    timeout: 10000,
  })
  return mapNewsResults(data?.results || [])
}

export const GET = async () => {
  try {
    await connectDB()

    const topic =
      TOPIC_GROUPS[Math.floor(Math.random() * TOPIC_GROUPS.length)]

    const seedNews = await fetchNews(topic.query)
    if (!seedNews.length) {
      return NextResponse.json(
        { success: false, message: 'No news found for selected topic' },
        { status: 404 }
      )
    }

    const topicSelection = await ai.interactions.create({
      model: 'gemini-3.1-flash-lite',
      input: `Here is the System Prompt: ${Best_Blog_SystemPrompt}
Here is the list of news articles: ${JSON.stringify(seedNews)}`,
    })

    const blogTopicData = JSON.parse(topicSelection.output_text || '{}')
    const queries = blogTopicData.queries || {}
    const newsQuery: string = (queries.news || [])[0] || topic.query
    const webQuery: string = queries.web || topic.query
    const youtubeQuery: string = queries.youtube || topic.query

    const [newsQueryData, ytQueryData, webSearchData] = await Promise.all([
      fetchNews(newsQuery),
      axios
        .get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'snippet',
            q: youtubeQuery,
            type: 'video',
            maxResults: 3,
            order: 'relevance',
            videoEmbeddable: true,
            key: process.env.YOUTUBE_API_KEY,
          },
          timeout: 10000,
        })
        .then((res) => res.data?.items || [])
        .catch(() => []),
      tavilyClient
        .search(webQuery, { searchDepth: 'basic', maxResults: 4 })
        .then((res) => res.results || [])
        .catch(() => []),
    ])

    const blogWriterResponse = await ai.interactions.create({
      model: 'gemini-3.1-flash-lite',
      input: `Here is the System Prompt: ${Blog_writer}
Here is the list of news articles: ${JSON.stringify(newsQueryData)}
Here is the list of youtube videos: ${JSON.stringify(ytQueryData)}
Here is the list of web search results: ${JSON.stringify(webSearchData)}`,
    })

    const blogWriterData = JSON.parse(blogWriterResponse.output_text || '{}')
    const blogMeta = blogWriterData?.blog || {}

    const saved = await BlogModel.create({
      blog: blogWriterResponse.output_text || '',
      title: blogMeta.title || blogTopicData?.selected_topic?.title || '',
      category: (blogMeta.category || topic.id || 'general').toLowerCase(),
      summary: blogMeta.summary || '',
      heroImage: blogMeta.heroImage || '',
      estimatedReadMinutes: blogMeta.estimatedReadMinutes || 5,
    })

    return NextResponse.json({
      success: true,
      message: 'Blog generated successfully',
      id: saved._id,
      topic: topic.id,
      title: saved.title,
    })
  } catch (error) {
    console.error('automate-blogs error:', error)
    return NextResponse.json(
      {
        success: false,
        message: 'Internal Server Error',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
}
