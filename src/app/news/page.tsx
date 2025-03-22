"use client";

import { useEffect, useState } from "react";
import NewsPage from "@/components/news/news-page";
import CategorySelection from "@/components/news/category-selection";
import axios from "axios";
import { useRouter } from "next/navigation";

export default function News() {
  const [showCategorySelection, setShowCategorySelection] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const checkUserCategories = async () => {
      try {
        // Fetch user data with JWT authentication
        const response = await axios.get("/api/user-jwt-auth", { withCredentials: true });

        if (response.data.success && response.data.categories?.length > 0) {
          // If categories exist, go to NewsPage
          setShowCategorySelection(false);
        }
      } catch (error) {
        console.error("Error fetching user categories:", error);
        
        // Handle unauthorized users (e.g., redirect to login)
        router.push("/login");
      } finally {
        setLoading(false);
      }
    };

    checkUserCategories();
  }, [router]);

  const handleCategorySubmit = async (selectedCategories: Record<string, string[]>) => {
    setIsSubmitting(true);

    try {
      await axios.post("/api/update-news-categories", { categories: selectedCategories }, { withCredentials: true });

      setShowCategorySelection(false);
    } catch (error) {
      console.error("Error updating categories:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  if (loading) {
    return <div className="flex justify-center items-center h-screen">Loading...</div>;
  }

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
