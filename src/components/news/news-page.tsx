"use client";

import { Suspense } from "react";
import NewsGrid from "./news-grid";
import SummarizedNews from "./summarized-news";
import FilterSort from "./filter-sort";
import NewsCardSkeleton from "./news-card-skeleton";
export default function NewsPage() {
  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Latest News</h1>

      <FilterSort />

      <div className="flex flex-col lg:flex-row gap-6 mt-6">
        <div className="w-full lg:w-[70%]">
          <Suspense
            fallback={
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {Array(6)
                  .fill(0)
                  .map((_, i) => (
                    <NewsCardSkeleton key={i} />
                  ))}
              </div>
            }
          >
            <NewsGrid />
          </Suspense>
        </div>

        <div className="w-full lg:w-[30%] lg:sticky lg:top-6 lg:self-start">
          <SummarizedNews />
        </div>
      </div>
    </div>
  );
}



// import { useEffect, useState } from "react";
// import { getNews } from "@/lib/NewsCategories";

// export default function NewsPage() {
//   const [newsList, setNewsList] = useState([]);

//   useEffect(() => {
//     async function fetchNews() {
//       const news = await getNews();
//       setNewsList(news);
//     }
//     fetchNews();
//   }, []);

//   return (
//     <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
//       {newsList.map((news) => (
//         <div key={news._id} className="bg-white rounded-lg shadow p-4">
//           <img src={news.imageUrl || "/placeholder.svg"} alt={news.title} className="w-full h-40 object-cover rounded" />
//           <h2 className="text-lg font-bold mt-4">{news.title}</h2>
//           <p className="text-sm text-gray-600">Categories: {Array.isArray(news.categories) ? news.categories.join(", ") : news.categories}</p>
//           <p className="text-gray-700 mt-2">{news.summary}</p>
//           <a href={`/news/${news._id}`} className="text-blue-500 mt-2 inline-block">Read more</a>
//         </div>
//       ))}
//     </div>
//   );
// }