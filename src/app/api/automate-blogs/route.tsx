import { TOPIC_GROUPS } from "@/utils/topics";
import { NextRequest, NextResponse } from "next/server";
import axios from "axios";
import { GoogleGenAI } from "@google/genai";
import { Best_Blog_SystemPrompt } from "@/utils/Best_Blog_SystemPrompt";


const ai = new GoogleGenAI({
    apiKey: process.env.GEMINI_API_KEY,
});

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
        return NextResponse.json({ message: "Hello, World!" ,  blog_topic: blog_topic_data });
    } catch (error) {
        return NextResponse.json({ message: "Internal Server Error" , error: error }, { status: 500 });
    }
}