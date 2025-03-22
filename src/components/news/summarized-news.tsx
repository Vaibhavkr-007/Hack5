"use client"

import { Card, CardContent, CardFooter } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useRouter } from "next/navigation"
import { useNewsStore } from "@/lib/store"

export default function SummarizedNews() {
  const router = useRouter()
  const { selectedNews } = useNewsStore()

  if (!selectedNews) {
    return (
      <Card className="h-full flex items-center justify-center p-6 text-center text-gray-500">
        <p>Select a news article to view the summary</p>
      </Card>
    )
  }

  return (
    <Card className="h-full">
      <CardContent className="p-6">
        {/* Category/Tag Badge */}
        <div className="mb-4">
          <span className="bg-blue-100 text-blue-500 px-3 py-1 rounded-full text-xs font-medium">
            {selectedNews.categories?.[0] || "General"}
          </span>
        </div>

        {/* News Title */}
        <h2 className="text-2xl font-bold mb-4">{selectedNews.title}</h2>

        {/* News Image */}
        <div className="relative w-full h-48 mb-4 rounded-lg overflow-hidden">
          <img
            src={selectedNews.imageUrl || "/placeholder.svg"}
            alt={selectedNews.title}
            className="object-cover w-full h-full"
          />
        </div>

        {/* Summary */}
        <div className="text-sm text-gray-700">
          <p className="mb-4">{selectedNews.summary}</p>
        </div>
      </CardContent>

      {/* Read Full Article Button */}
      <CardFooter className="px-6 pb-6 pt-0">
        <Button className="w-full" onClick={() => router.push(`/news/${selectedNews._id}`)}>
          Read Full Article
        </Button>
      </CardFooter>
    </Card>
  )
}
