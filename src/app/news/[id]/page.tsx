"use client"
import { Suspense, useEffect, useState } from "react";
import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card } from "@/components/ui/card";
import Chatbot from "@/components/news/chatbot";
import { getNewsById } from "@/components/news/news-db-connection";
import ShareButtons from "@/components/news/share-buttons";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation"
import { useNewsStore } from "@/lib/store"

export default function NewsDetailPage({ params }: { params: { id: string } }) {
  const { id } = params;
  const [news, setNews] = useState<any>(null);
  const router = useRouter();
  const { selectedNews } = useNewsStore();
  const [isLoading, setIsLoading] = useState(false);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [audio, setAudio] = useState<HTMLAudioElement | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);


  useEffect(() => {
    const fetchNews = async () => {
      try {
        const data = await getNewsById(id);
        setNews(data);
      } catch (error) {
        console.error("Error fetching news:", error);
        setNews(null);
      }
    };
    fetchNews();
  }, [id]);

  const handleListen = async () => {
    if (!selectedNews?.summary) return;
    setIsLoading(true);
    try {
      const response = await fetch('http://127.0.0.1:5000/text-to-speech', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ text: selectedNews.summary }),
      });
      const data = await response.json();
      if (data?.audio_file_path) {
        const audioUrl = `http://127.0.0.1:5000${data.audio_file_path}`;
        setAudioUrl(audioUrl);
        const newAudio = new Audio(audioUrl);
        setAudio(newAudio);
        newAudio.play();
        setIsPlaying(true);
      }
    } catch (error) {
      console.error('Error during text-to-speech:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleStop = () => {
    if (audio) {
      audio.pause();
      audio.currentTime = 0;
      setAudio(null);
      setIsPlaying(false);
    }
  };

  if (!news) {
    return <div className="container mx-auto py-12 text-center">Loading news article...</div>;
  }

  const categories = Array.isArray(news.categories) ? news.categories.join(", ") : news.categories;
  const formattedDate = new Date(news.publishedAt).toLocaleDateString();

  return (
    <main className="container mx-auto py-6 px-4">
      <Link href="/" className="inline-flex items-center mb-6 text-gray-500 hover:text-blue-500">
        <ArrowLeft className="mr-2 h-4 w-4" />
        Back to news
      </Link>

      <div className="flex flex-col lg:flex-row gap-6">
        <div className="w-full lg:w-[70%]">
          <article className="text-gray-700">
            <h1 className="text-3xl font-bold mb-4">{news.title}</h1>
            <p className="text-sm text-gray-600 mb-2">Categories: {categories || "General"}</p>

            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-2">
                <Avatar className="h-8 w-8">
                  <AvatarImage src="/placeholder.svg" alt="Author" />
                  <AvatarFallback>AU</AvatarFallback>
                </Avatar>
                <div>
                  <p className="text-sm font-medium">{news.author || "Unknown Author"}</p>
                  <p className="text-xs text-gray-500">{formattedDate}</p>
                </div>
              </div>
              <ShareButtons url={`/news/${id}`} title={news.title} />
            </div>

            <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
              <img src={news.imageUrl || "/placeholder.svg"} alt={news.title} className="object-cover w-full h-full" />
              <span className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                {news.categories?.[0] || "General"}
              </span>
            </div>

            <div dangerouslySetInnerHTML={{ __html: news.content }} />
          </article>
        </div>

        <div className="w-full lg:w-[30%] lg:sticky lg:top-6 lg:self-start">
          <Card className="p-4">
            <div className="flex gap-4">
              <Button 
                onClick={handleListen}
                className={`w-full mt-4 ${isPlaying ? 'w-1/2' : ''}`} 
                disabled={isLoading || isPlaying}
              >
                {isLoading ? 'Loading...' : 'Listen'}
              </Button>
              {isPlaying && (
                <Button onClick={handleStop} className="w-1/2 mt-4">
                  Stop
                </Button>
              )}
            </div>
            <h2 className="text-xl font-semibold mb-4">Ask about this article</h2>
            <Suspense fallback={<div className="h-[400px] flex items-center justify-center">Loading chatbot...</div>}>
              <Chatbot newsId={id} />
            </Suspense>
          </Card>
        </div>
      </div>
    </main>
  );
}