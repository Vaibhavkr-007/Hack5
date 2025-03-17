import { Suspense } from "react"
import { ArrowLeft } from "lucide-react"
import Link from "next/link"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Card } from "@/components/ui/card"
import Chatbot from "@/components/news/chatbot"
import { getNewsById } from "@/lib/NewsCategories"
import ShareButtons from "@/components/news/share-buttons"

export default function NewsDetailPage({ params }: { params: { id: string } }) {
    const news = getNewsById(params.id)

    if (!news) {
        return <div className="container mx-auto py-12 text-center">News article not found</div>
    }

    return (
        <main className="container mx-auto py-6 px-4">
            <Link href="/" className="inline-flex items-center mb-6 text-gray-500 hover:text-blue-500">
                <ArrowLeft className="mr-2 h-4 w-4" />
                Back to news
            </Link>

            <div className="flex flex-col lg:flex-row gap-6">
                <div className="w-full lg:w-[70%]">
                    <article className="text-gray-700 max-w-none">
                        <h1 className="text-3xl font-bold mb-4">{news.title}</h1>

                        <div className="flex items-center justify-between mb-6">
                            <div className="flex items-center gap-2">
                                <Avatar className="h-8 w-8">
                                    <AvatarImage src="/placeholder.svg?height=32&width=32" alt="Author" />
                                    <AvatarFallback>AU</AvatarFallback>
                                </Avatar>
                                <div>
                                    <p className="text-sm font-medium">John Doe</p>
                                    <p className="text-xs text-gray-500">{news.date}</p>
                                </div>
                            </div>

                            <ShareButtons url={`/news/${news.id}`} title={news.title} />
                        </div>

                        <div className="relative w-full h-[300px] mb-6 rounded-lg overflow-hidden">
                            <img src={news.image || "/placeholder.svg"} alt={news.title} className="object-cover w-full h-full" />
                            <span className="absolute top-4 left-4 bg-blue-500 text-white px-3 py-1 rounded-full text-xs font-medium">
                                {news.tag}
                            </span>
                        </div>

                        <div dangerouslySetInnerHTML={{ __html: news.content }} />
                    </article>
                </div>

                <div className="w-full lg:w-[30%] lg:sticky lg:top-6 lg:self-start">
                    <Card className="p-4">
                        <h2 className="text-xl font-semibold mb-4">Ask about this article</h2>
                        <Suspense fallback={<div className="h-[400px] flex items-center justify-center">Loading chatbot...</div>}>
                            <Chatbot newsId={news.id} />
                        </Suspense>
                    </Card>
                </div>
            </div>
        </main>
    )
}