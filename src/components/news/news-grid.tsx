// "use client"

// import { useState, useEffect } from "react"
// import axios from "axios"
// import { useRouter } from "next/navigation"
// import NewsCard from "./news-card"
// import { Button } from "@/components/ui/button"
// import { ChevronLeft, ChevronRight } from "lucide-react"
// import { getNews } from "@/components/news/news-db-connection"
// import { message } from "antd"


// // Define the expected structure of a news item
// interface NewsItem {
//   _id: string;
//   title: string;
//   description: string;
//   source: string;
//   author: string;
//   url: string;
//   imageUrl: string;
//   publishedAt: Date;
//   content: string;
//   summary: string;
//   categories: string[]; // Ensure categories is always an array of strings
// }

// export default function NewsGrid() {
//   const [currentPage, setCurrentPage] = useState(1)
//   const [news, setNews] = useState<NewsItem[]>([]) 
//   const [userCategories, setUserCategories] = useState<string[]>([])
//   const [hiddenNewsIds, setHiddenNewsIds] = useState<string[]>([])
//   const [loading, setLoading] = useState(true)
//   const router = useRouter()

//   const newsPerPage = 6

//   // Fetch user categories from /api/user-jwt-auth
//   useEffect(() => {
//     async function fetchUserCategories() {
//       try {
//         console.log("Fetching user categories...")

//         const response = await axios.get("/api/user-jwt-auth", { withCredentials: true })
//         console.log("User categories response:", response)

//         if (response.data && Array.isArray(response.data.categories)) {
//           setUserCategories(response.data.categories)
//         } else {
//           console.warn("Categories not found in response:", response)
//           setUserCategories([]) // Fallback to empty array
//         }
//       } catch (error) {
//         console.error("Error fetching user categories:", error)
//       }
//     }

//     fetchUserCategories()
//   }, [])

//   // Fetch news and filter by user categories
//   useEffect(() => {
//     async function fetchNews() {
//       try {
//         console.log("Fetching news...");
//         const newsData = await getNews();
//         console.log("Fetched news:", newsData);

//         // Ensure newsItem.categories is an array before filtering
//         const filteredNews = newsData.filter((newsItem: NewsItem) =>
//           (Array.isArray(newsItem.categories) ? newsItem.categories : []).some((category) =>
//             userCategories.includes(category)
//           )
//         );

//         console.log("Filtered news:", filteredNews);
//         setNews(filteredNews);
//       } catch (error) {
//         console.error("Error fetching news:", error);
//       } finally {
//         setLoading(false); // Ensure loading is set to false after fetching
//       }
//     }

//     if (userCategories.length > 0) {
//       fetchNews();
//     }
//   }, [userCategories]); // Fetch news only after userCategories are loaded

//   const handleNotInterested = (id: string) => {
//     setHiddenNewsIds([...hiddenNewsIds, id])
//   }

//   const totalPages = Math.ceil(news.length / newsPerPage)
//   const currentNews = news.slice((currentPage - 1) * newsPerPage, currentPage * newsPerPage)

//   // Filter out hidden news items
//   const visibleNews = currentNews.filter((item) => !hiddenNewsIds.includes(item._id))

//   const handlePrevPage = () => {
//     if (currentPage > 1) setCurrentPage(currentPage - 1)
//   }

//   const handleNextPage = () => {
//     if (currentPage < totalPages) setCurrentPage(currentPage + 1)
//   }

//   if (loading) return <p className="text-center text-gray-500">Loading news...</p>

//   return (
//     <div>
//       {visibleNews.length > 0 ? (
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//           {visibleNews.map((item) => (
//             <NewsCard key={item._id} news={item} onNotInterested={handleNotInterested} />
//           ))}
//         </div>
//       ) : (
//         <p className="text-center text-gray-500">No news available for your selected categories.</p>
//       )}

//       {totalPages > 1 && (
//         <div className="flex justify-center items-center gap-2 mt-8">
//           <Button variant="outline" size="icon" onClick={handlePrevPage} disabled={currentPage === 1}>
//             <ChevronLeft className="h-4 w-4" />
//             <span className="sr-only">Previous page</span>
//           </Button>

//           {Array.from({ length: totalPages }).map((_, i) => (
//             <Button
//               key={i}
//               variant={currentPage === i + 1 ? "default" : "outline"}
//               size="sm"
//               onClick={() => setCurrentPage(i + 1)}
//             >
//               {i + 1}
//             </Button>
//           ))}

//           <Button variant="outline" size="icon" onClick={handleNextPage} disabled={currentPage === totalPages}>
//             <ChevronRight className="h-4 w-4" />
//             <span className="sr-only">Next page</span>
//           </Button>
//         </div>
//       )}
//     </div>
//   )
// }










"use client"

import { useState, useEffect } from "react"
import axios from "axios"
import { useRouter } from "next/navigation"
import NewsCard from "./news-card"
import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { getNews } from "@/components/news/news-db-connection"
import { message } from "antd"

// Define the expected structure of a news item
interface NewsItem {
  _id: string;
  title: string;
  description: string;
  source: string;
  author: string;
  url: string;
  imageUrl: string;
  publishedAt: Date;
  content: string;
  summary: string;
  categories: string[]; // Ensure categories is always an array of strings
}

export default function NewsGrid() {
  const [currentPage, setCurrentPage] = useState(1)
  const [news, setNews] = useState<NewsItem[]>([]) 
  const [userCategories, setUserCategories] = useState<string[]>([])
  const [hiddenNewsIds, setHiddenNewsIds] = useState<string[]>([])
  const [loading, setLoading] = useState(true)
  const router = useRouter()

  const newsPerPage = 10

  // ✅ Fetch user categories from /api/user-jwt-auth
  useEffect(() => {
    async function fetchUserCategories() {
      try {
        console.log("Fetching user categories...")

        const response = await axios.get("/api/user-jwt-auth", { withCredentials: true })
        console.log("User categories response:", response)

        if (response.data && Array.isArray(response.data.categories)) {
          setUserCategories(response.data.categories)
        } else {
          console.warn("Categories not found in response:", response)
          setUserCategories([]) // Fallback to empty array
        }
      } catch (error) {
        console.error("Error fetching user categories:", error)
      }
    }

    fetchUserCategories()
  }, [])

  // ✅ Fetch news and filter by user categories
  useEffect(() => {
    async function fetchNews() {
      try {
        console.log("🔍 Fetching news...");
        const newsData = await getNews();
        console.log("✅ Fetched news:", newsData);
  
        console.log("📌 User selected categories:", userCategories);
  
        // Ensure `categories` is an array, splitting if necessary
        const filteredNews = newsData.filter((newsItem: NewsItem) => {
          const newsCategories = newsItem.categories
            ? newsItem.categories.split(",").map(category => category.trim().toLowerCase()) // Convert to array & lowercase
            : [];
  
          return newsCategories.some(newsCategory =>
            userCategories.map(c => c.toLowerCase()).includes(newsCategory)
          );
        });
  
        console.log("📂 Processed News Item Categories:", newsData.map(n => ({
          title: n.title, categories: n.categories?.split(",").map(c => c.trim()) || []
        })));
  
        console.log("🎯 Filtered news:", filteredNews);
        setNews(filteredNews);
      } catch (error) {
        console.error("❌ Error fetching news:", error);
      } finally {
        setLoading(false); // ✅ Ensure loading is set to false after fetching
      }
    }
  
    // Fetch news only when userCategories are available
    if (userCategories.length > 0) {
      fetchNews();
    }
  }, [userCategories]);
   // ✅ Fetch news only after userCategories are loaded

  const handleNotInterested = (id: string) => {
    setHiddenNewsIds([...hiddenNewsIds, id])
  }

  const totalPages = Math.ceil(news.length / newsPerPage)
  const currentNews = news.slice((currentPage - 1) * newsPerPage, currentPage * newsPerPage)

  // ✅ Filter out hidden news items
  const visibleNews = currentNews.filter((item) => !hiddenNewsIds.includes(item._id))

  const handlePrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1)
  }

  const handleNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1)
  }

  if (loading) return <p className="text-center text-gray-500">Loading news...</p>

  return (
    <div>
      {visibleNews.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {visibleNews.map((item) => (
            <NewsCard key={item._id} news={item} onNotInterested={handleNotInterested} />
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No news available for your selected categories.</p>
      )}

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
