'use server'
import '@/lib/db'
import NewsSchema from "@/lib/schema/News"; 
import { Types } from "mongoose";

export async function getNews() {
  try {
    const news = await NewsSchema.find(
      {},
      "_id title summary publishedAt imageUrl url categories"
    );

    // ✅ Convert `_id` to a string before returning
    const formattedNews = news.map((item) => ({
      ...item.toObject(), // Convert Mongoose document to a plain object
      _id: item._id.toString(), // Convert ObjectId to string
    }));

    return formattedNews;
  } catch (error) {
    console.error("Error fetching news:", error);
    return [];
  }
}

export async function getNewsById(id: string) {
  if (!Types.ObjectId.isValid(id)) {
    return null; // Return null if id is invalid
  }

  const news = await NewsSchema.findById(id).lean(); // Ensure this returns a single document

  if (!news) return null;

  return {
    ...news,
    _id: news._id.toString(), // Convert ObjectId to string
  };
}



// services/api.ts

interface ApiResponse {
  candidates: Array<{
    content: {
      parts: Array<{ text: string }>;
      role: string;
    };
    finishReason: string;
    avgLogprobs: number;
  }>;
  usageMetadata: {
    promptTokenCount: number;
    candidatesTokenCount: number;
    totalTokenCount: number;
    promptTokensDetails: Array<{ modality: string; tokenCount: number }>;
    candidatesTokensDetails: Array<{ modality: string; tokenCount: number }>;
  };
  modelVersion: string;
}

export const fetchBotResponse = async (newsContent: string, userQuery: string): Promise<string> => {
  try {
    const response = await fetch("https://xzqh51pndl.execute-api.eu-north-1.amazonaws.com/default", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        news_article: newsContent,
        user_query: userQuery,
      }),
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(`Failed to get chatbot response: ${response.status} - ${errorText}`);
    }

    const data: ApiResponse = await response.json();
    let responseBody;

    try {
      responseBody = JSON.parse(data.body);
    } catch (error) {
      throw new Error("Invalid JSON response format from API.");
    }

    if (!responseBody?.candidates?.[0]?.content?.parts?.[0]?.text) {
      throw new Error("Invalid API response format");
    }

    return responseBody.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error("Error fetching chatbot response:", error);
    return "Sorry, I couldn't fetch an answer at the moment.";
  }
};

