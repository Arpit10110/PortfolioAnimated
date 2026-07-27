import { TOPIC_GROUPS } from "@/utils/topics";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { GoogleGenAI } from "@google/genai";
import { Best_Blog_SystemPrompt } from "@/utils/Best_Blog_SystemPrompt";
import {tavily} from "@tavily/core"
import { Blog_writer } from "@/utils/Blog_writer";

const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});
const tavily_client = tavily({
    apiKey:process.env.WEB_SEARCH_API_KEY,
})

export const GET = async(request: NextRequest) => {
    try {

        const topic = TOPIC_GROUPS[Math.floor(Math.random() * TOPIC_GROUPS.length)];

        const news_response = await axios.get(`https://newsdata.io/api/1/latest? 
        apikey=${process.env.NEWS_API_KEY}
        &q=${topic.query}`)
        const news_data = news_response?.data?.results;
        const best_new_for_blog =  news_data.map((news: any)=>{
            return {
                title: news.title,
                description: news.description,
                image: news.image_url,
                link: news.link,
            }
        })
        const interaction = await ai.interactions.create({
            model: "gemini-3.1-flash-lite",
            input: `Here is the System Prompt: ${Best_Blog_SystemPrompt}
            Here is the list of news articles: ${JSON.stringify(best_new_for_blog)}`,
          });
          //parse the output text
          const blog_topic_data = JSON.parse(interaction.output_text || "{}");
          const queries = blog_topic_data.queries;
          const news = queries.news || [];
          const web = queries.web;
          const youtube = queries.youtube;
          //news query
          const news_query_data_for_blog = await Promise.all(news.map(async (news: string) => {
            const news_query_response = await axios.get(`https://newsdata.io/api/1/latest? 
            apikey=${process.env.NEWS_API_KEY}
            &q=${news}`)
            const news_query_data = news_query_response?.data?.results;
            return news_query_data.map((news: any)=>{
                return {
                    title: news.title,
                    description: news.description,
                    image: news.image_url,
                    link: news.link,
                }
            });
          }))
         
          //yt querie
          const yt_query_response = await axios.get(`https://www.googleapis.com/youtube/v3/search?part=snippet&q=${youtube}&type=video&maxResults=5&order=relevance&videoEmbeddable=true&key=${process.env.YOUTUBE_API_KEY}`)
          const yt_query_data = yt_query_response?.data?.items;
          //web search query
          const web_search_query_response = await tavily_client.search(web,{searchDepth:"advanced"})
          const web_search_query_data = web_search_query_response?.results || [];


          //blog writer
          const blog_writer_response = await ai.interactions.create({
            model: "gemini-3.1-flash-lite",
            input: `Here is the System Prompt: ${Blog_writer}
            Here is the list of news articles: ${JSON.stringify(news_query_data_for_blog)}
            Here is the list of youtube videos: ${JSON.stringify(yt_query_data)}
            Here is the list of web search results: ${JSON.stringify(web_search_query_data)}`,
          });
          const blog_writer_data = JSON.parse(blog_writer_response.output_text || "{}");
        return NextResponse.json({ message: "Hello, World!" ,  blog_topic: blog_topic_data, blog_writer_data: blog_writer_data });
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" , error: error }, { status: 500 });
    }
}

