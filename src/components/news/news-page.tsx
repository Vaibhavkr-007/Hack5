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
