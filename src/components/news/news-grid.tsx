"use client"

import { useState } from "react"
import NewsCard from "./news-card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { getNews } from "@/lib/NewsCategories"

export default function NewsGrid() {
  const [currentPage, setCurrentPage] = useState(1)
  const newsPerPage = 6
  const news = getNews()

  const [hiddenNewsIds, setHiddenNewsIds] = useState<string[]>([])

  const handleNotInterested = (id: string) => {
    setHiddenNewsIds([...hiddenNewsIds, id])
  }

  const totalPages = Math.ceil(news.length / newsPerPage)
  const currentNews = news.slice((currentPage - 1) * newsPerPage, currentPage * newsPerPage)

  // Filter out hidden news items
  const visibleNews = currentNews.filter((item) => !hiddenNewsIds.includes(item.id))

  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1)
    }
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1)
    }
  }

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {visibleNews.map((item) => (
          <NewsCard key={item.id} news={item} onNotInterested={handleNotInterested} />
        ))}
      </div>

      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-2 mt-8">
          <Button variant="outline" size="icon" onClick={handlePrevPage} disabled={currentPage === 1}>
            <ChevronLeft className="h-4 w-4" />
            <span className="sr-only">Previous page</span>
          </Button>

          {Array.from({ length: totalPages }).map((_, i) => (
            <Button
              key={i}
              variant={currentPage === i + 1 ? "default" : "outline"}
              size="sm"
              onClick={() => setCurrentPage(i + 1)}
            >
              {i + 1}
            </Button>
          ))}

          <Button variant="outline" size="icon" onClick={handleNextPage} disabled={currentPage === totalPages}>
            <ChevronRight className="h-4 w-4" />
            <span className="sr-only">Next page</span>
          </Button>
        </div>
      )}
    </div>
  )
}

