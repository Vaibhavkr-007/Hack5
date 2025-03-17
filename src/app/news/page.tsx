"use client";

import { useState } from "react";
import NewsPage from "@/components/news/news-page";
import CategorySelection from "@/components/news/category-selection";

export default function News() {
  const [showCategorySelection, setShowCategorySelection] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleCategorySubmit = (selectedCategories: Record<string, string[]>) => {
    setIsSubmitting(true);
    setTimeout(() => {
      setShowCategorySelection(false);
      setIsSubmitting(false);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <main className="container mx-auto px-4 py-6">
        {showCategorySelection ? (
          <div className="bg-white rounded-lg p-6 shadow">
            <h1 className="text-2xl font-bold mb-6">Select Your News Interests</h1>
            <p className="text-gray-600 mb-8">
              Choose the topics you're interested in to personalize your news feed.
            </p>
            <CategorySelection onSubmit={handleCategorySubmit} isSubmitting={isSubmitting} />
          </div>
        ) : (
          <NewsPage />
        )}
      </main>
    </div>
  );
}
