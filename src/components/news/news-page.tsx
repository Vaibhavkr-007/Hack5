// "use client";

// import { Suspense } from "react";
// import NewsGrid from "./news-grid";
// import SummarizedNews from "./summarized-news";
// import FilterSort from "./filter-sort";
// import NewsCardSkeleton from "./news-card-skeleton";
// export default function NewsPage() {
//   return (
//     <div>
//       <h1 className="text-3xl font-bold mb-6">Latest News</h1>

//       <FilterSort />

//       <div className="flex flex-col lg:flex-row gap-6 mt-6">
//         <div className="w-full lg:w-[70%]">
//           <Suspense
//             fallback={
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {Array(6)
//                   .fill(0)
//                   .map((_, i) => (
//                     <NewsCardSkeleton key={i} />
//                   ))}
//               </div>
//             }
//           >
//             <NewsGrid />
//           </Suspense>
//         </div>

//         <div className="w-full lg:w-[30%] lg:sticky lg:top-6 lg:self-start">
//           <SummarizedNews />
//         </div>
//       </div>
//     </div>
//   );
// }




// "use client";

// import { Suspense, useState } from "react";
// import NewsGrid from "./news-grid";
// import SummarizedNews from "./summarized-news";
// import FilterSort from "./filter-sort";
// import NewsCardSkeleton from "./news-card-skeleton";

// const NEWS_SEARCH_CAT_API_KEY = "https://fv8xvfypw6.execute-api.eu-north-1.amazonaws.com/default"

// const fetchCategory = async (news_search_text: string): Promise<string[]> => {
//   try {
//       const response = await axios.post(NEWS_SEARCH_CAT_API_KEY, { news_search_text });
//       const responseBody = JSON.parse(response.data.body);

//       // Check if 'candidates' exists and has elements before accessing [0]
//       if (responseBody.candidates && responseBody.candidates.length > 0) {
//           const contentText = responseBody.candidates[0]?.content?.parts[0]?.text || "";
//           const extractedData = JSON.parse(contentText.replace(/```json|```/g, ""));
//           return extractedData.categories || [];
//       } else {
//           console.warn("No candidates found in the response.");
//           return [];
//       }
//   } catch (error) {
//       console.error("Error fetching category:", error);
//       return [];
//   }
// };

// export default function NewsPage() {
//   const [searchQuery, setSearchQuery] = useState("");

//   const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
//     setSearchQuery(event.target.value);
//   };

//   return (
//     <div>

//       {/* Search Bar */}
//       <div className="flex justify-center mb-4">
//         <div className="flex items-center space-x-2">
//           <input
//             type="text"
//             value={searchQuery}
//             onChange={handleSearchChange}
//             placeholder="Search news..."
//             className="w-200 p-2 border border-gray-300 rounded-md"
//           />
//           <button
//             onClick={handleSearchSubmit}
//             className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
//           >
//             Search
//           </button>
//         </div>
//       </div>

//       {/* Filter and Sort */}
//       <FilterSort />

//       <div className="flex flex-col lg:flex-row gap-6 mt-6">
//         <div className="w-full lg:w-[70%]">
//           <Suspense
//             fallback={
//               <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
//                 {Array(6)
//                   .fill(0)
//                   .map((_, i) => (
//                     <NewsCardSkeleton key={i} />
//                   ))}
//               </div>
//             }
//           >
//             <NewsGrid searchQuery={searchQuery} />
//           </Suspense>
//         </div>

//         <div className="w-full lg:w-[30%] lg:sticky lg:top-6 lg:self-start">
//           <SummarizedNews />
//         </div>
//       </div>
//     </div>
//   );
// }






"use client";

import { Suspense, useState } from "react";
import NewsGrid from "./news-grid";
import SummarizedNews from "./summarized-news";
import FilterSort from "./filter-sort";
import NewsCardSkeleton from "./news-card-skeleton";
import axios from "axios";

const NEWS_SEARCH_CAT_API_KEY = "https://fv8xvfypw6.execute-api.eu-north-1.amazonaws.com/default";

const fetchCategory = async (news_search_text: string): Promise<string[]> => {
  try {
    const response = await axios.post(NEWS_SEARCH_CAT_API_KEY, { news_search_text });
    const responseBody = JSON.parse(response.data.body);

    // Check if 'candidates' exists and has elements before accessing [0]
    if (responseBody.candidates && responseBody.candidates.length > 0) {
      const contentText = responseBody.candidates[0]?.content?.parts[0]?.text || "";
      const extractedData = JSON.parse(contentText.replace(/```json|```/g, ""));
      console.log(extractedData)
      return extractedData.categories;
    } else {
      console.warn("No candidates found in the response.");
      return [];
    }
  } catch (error) {
    console.error("Error fetching category:", error);
    return [];
  }
}; 

export default function NewsPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [categories, setCategories] = useState<string[]>([]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = async () => {
    if (searchQuery) {
      const fetchedCategories = await fetchCategory(searchQuery);
      console.log(fetchedCategories)
      setCategories(fetchedCategories);
    }
  };

  return (
    <div>
      {/* Search Bar */}
      <div className="flex justify-center mb-4">
        <div className="flex items-center space-x-2">
          <input
            type="text"
            value={searchQuery}
            onChange={handleSearchChange}
            placeholder="Search news..."
            className="w-200 p-2 border border-gray-300 rounded-md"
          />
          <button
            onClick={handleSearchSubmit}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none"
          >
            Search
          </button>
        </div>
      </div>

      {/* Display fetched categories */}
      {/* {categories.length > 0 && (
        <div className="mb-4">
          <h3>Categories:</h3>
          <ul>
            {categories.map((category, index) => (
              <li key={index}>{category}</li>
            ))}
          </ul>
        </div>
      )} */}

      {/* Filter and Sort */}
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
            <NewsGrid searchQuery={searchQuery} />
          </Suspense>
        </div>

        <div className="w-full lg:w-[30%] lg:sticky lg:top-6 lg:self-start">
          <SummarizedNews />
        </div>
      </div>
    </div>
  );
}