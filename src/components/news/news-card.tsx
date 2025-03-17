"use client"

import type React from "react"
import { useState } from "react"
import { useRouter } from "next/navigation"
import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bookmark, Share2, ThumbsUp, ThumbsDown } from "lucide-react"
import type { News } from "@/lib/types"
import ShareButtons from "./share-buttons"
import { useNewsStore } from "@/lib/store"
import { toast } from "sonner" // Import Sonner's toast function

interface NewsCardProps {
  news: News
  onNotInterested?: (id: string) => void
}

export default function NewsCard({ news, onNotInterested }: NewsCardProps) {
  const router = useRouter()
  const [isBookmarked, setIsBookmarked] = useState(news.bookmarked || false)
  const [showShareOptions, setShowShareOptions] = useState(false)
  const { setSelectedNews } = useNewsStore()

  const handleBookmark = (e: React.MouseEvent) => {
    e.stopPropagation()
    setIsBookmarked(!isBookmarked)
    // In a real app, you would save this to a database or local storage
  }

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation()
    setShowShareOptions(!showShareOptions)
  }

  const handleCardClick = () => {
    setSelectedNews(news)
  }

  const handleReadFull = (e: React.MouseEvent) => {
    e.stopPropagation()
    router.push(`/news/${news.id}`)
  }

  const handleInterested = () => {
    // Use Sonner's toast for success notification
    toast.success("We will show you more content like this!")
  }

  const handleNotInterested = () => {
    // Use Sonner's toast for warning notification
    toast.warning("We will show you less content like this.")

    // Notify parent component to remove this card
    if (onNotInterested) {
      onNotInterested(news.id)
    }
  }

  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-md cursor-pointer group"
      onClick={handleCardClick}
    >
      <div className="relative w-full h-48 overflow-hidden">
        <img
          src={news.image || "/placeholder.svg"}
          alt={news.title}
          className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
          {news.tag}
        </span>
      </div>

      <CardContent className="p-4">
        <h3 className="text-xl font-semibold mb-2 line-clamp-2">{news.title}</h3>
        <p className="text-gray-500 text-sm mb-4 line-clamp-3">{news.excerpt}</p>
        <p className="text-xs text-gray-500">{news.date}</p>
      </CardContent>

      <CardFooter className="px-4 pb-4 pt-0 flex flex-col gap-2">
        <div className="flex justify-between w-full">
          <div className="flex gap-2">
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                handleInterested()
              }}
            >
              <ThumbsUp className="h-4 w-4 mr-1" />
              Interested
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={(e) => {
                e.stopPropagation()
                handleNotInterested()
              }}
            >
              <ThumbsDown className="h-4 w-4 mr-1" />
              Not Interested
            </Button>
          </div>

          <div className="flex gap-2">
            <Button
              variant="ghost"
              size="icon"
              className={isBookmarked ? "text-blue-500" : ""}
              onClick={handleBookmark}
            >
              <Bookmark className="h-4 w-4" />
              <span className="sr-only">Bookmark</span>
            </Button>

            <div className="relative">
              <Button variant="ghost" size="icon" onClick={handleShare}>
                <Share2 className="h-4 w-4" />
                <span className="sr-only">Share</span>
              </Button>

              {showShareOptions && (
                <div className="absolute right-0 bottom-full mb-2 z-10">
                  <ShareButtons url={`/news/${news.id}`} title={news.title} />
                </div>
              )}
            </div>
          </div>
        </div>

        <Button variant="link" className="self-start p-0 h-auto" onClick={handleReadFull}>
          Read Full News
        </Button>
      </CardFooter>
    </Card>
  )
}