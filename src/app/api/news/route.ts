// Fetch News From External API
import '@/lib/db'
import 'dotenv/config'
import axios from "axios";
import News from "@/lib/schema/News";

const NEWS_API_URL = "https://newsapi.org/v2/top-headlines?sources=techcrunch&apiKey=3b43bbce1ad94317bbbd12d5005d8d7e";
const CATEGORY_API_URL = "https://3xcdp0crui.execute-api.eu-north-1.amazonaws.com/default";
const SUMMARY_API_URL = "https://jxitdv3no7.execute-api.eu-north-1.amazonaws.com/default";

const fetchCategory = async (news_title_text: string): Promise<string[]> => {
    try {
        const response = await axios.post(CATEGORY_API_URL, { news_title_text });
        const responseBody = JSON.parse(response.data.body);
        const contentText = responseBody.candidates[0]?.content?.parts[0]?.text || "";
        const extractedData = JSON.parse(contentText.replace(/```json|```/g, ""));
        return extractedData.categories || [];
    }
    catch (error) {
        console.error("Error fetching category:", error);
        return [];
    }
};

const fetchSummary = async (news_text: string): Promise<{ headline: string; summary: string }> => {
    try {
        const response = await axios.post(SUMMARY_API_URL, { news_text });
        const responseBody = JSON.parse(response.data.body);
        const contentText = responseBody.candidates[0]?.content?.parts[0]?.text || "";
        const extractedData = JSON.parse(contentText.replace(/```json|```/g, ""));
        return extractedData;
    }
    catch (error) {
        console.error("Error fetching summary:", error);
        return { headline: "", summary: "" };
    }
};

const fetchAndSaveNews = async (): Promise<void> => {
    try {
        const response = await axios.get(NEWS_API_URL);
        const articles = response.data.articles;

        for (const article of articles) {
            if (!article.url || !article.urlToImage || !article.title || !article.content) continue;

            const categories = await fetchCategory(article.title);
            const { headline, summary } = await fetchSummary(article.content);

            const newsData = {
                title: article.title,
                description: article.description,
                source: article.source.name,
                author: article.author || "Unknown",
                url: article.url,
                imageUrl: article.urlToImage,
                publishedAt: new Date(article.publishedAt),
                content: article.content,
                categories: categories.length ? categories.join(", ") : "Uncategorized",
                headline,
                summary
            };

            // Save to DB if not already exists
            await News.findOneAndUpdate(
                { url: newsData.url },
                newsData,
                { upsert: true, new: true }
            );
        }
        console.log("News articles updated successfully");
    } catch (error) {
        console.error("Error fetching news:", error);
    }
};

// Run the function every 30 minutes
// setInterval(fetchAndSaveNews, 30 * 60 * 1000);

// Initial call
fetchAndSaveNews();



