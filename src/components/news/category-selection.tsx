"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { newsCategories } from "@/lib/NewsCategories"

interface CategorySelectionProps {
  onSubmit: (selectedCategories: Record<string, string[]>) => void
  isSubmitting: boolean
}

export default function CategorySelection({ onSubmit, isSubmitting }: CategorySelectionProps) {
  const [openCategory, setOpenCategory] = useState<string | null>(null)
  const [selectedCategories, setSelectedCategories] = useState<Record<string, string[]>>({})
  const [selectedCount, setSelectedCount] = useState(0)

  const toggleCategory = (categoryId: string) => {
    setOpenCategory(openCategory === categoryId ? null : categoryId)
  }

  const toggleSubcategory = (categoryId: string, subcategoryId: string) => {
    setSelectedCategories((prev) => {
      const prevSelected = prev[categoryId] || []
      const isAlreadySelected = prevSelected.includes(subcategoryId)

      let newSelected: string[]

      if (isAlreadySelected) {
        newSelected = prevSelected.filter((id) => id !== subcategoryId)
        setSelectedCount((count) => count - 1)
      } else {
        newSelected = [...prevSelected, subcategoryId]
        setSelectedCount((count) => count + 1)
      }

      if (newSelected.length === 0) {
        const { [categoryId]: _, ...rest } = prev
        return rest
      }

      return {
        ...prev,
        [categoryId]: newSelected,
      }
    })
  }

  const isSubcategorySelected = (categoryId: string, subcategoryId: string) => {
    return selectedCategories[categoryId]?.includes(subcategoryId) || false
  }

  const getCategorySelectionCount = (categoryId: string) => {
    return selectedCategories[categoryId]?.length || 0
  }

  const handleSubmit = () => {
    onSubmit(selectedCategories)
  }

  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {newsCategories.map((category) => (
          <Card key={category.id} className="overflow-hidden transition duration-300 ease-in-out transform hover:shadow-lg hover:scale-105">
            <div
              className="p-4 cursor-pointer flex items-center justify-between"
              onClick={() => toggleCategory(category.id)}
            >
              <div className="flex items-center space-x-3">
                <div className="bg-blue-100 p-2 rounded-full">
                  <category.icon className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <h3 className="font-medium">{category.name}</h3>
                  {getCategorySelectionCount(category.id) > 0 && (
                    <p className="text-xs text-gray-500">{getCategorySelectionCount(category.id)} selected</p>
                  )}
                </div>
              </div>
              {openCategory === category.id ? (
                <ChevronUp className="h-5 w-5 text-gray-500" />
              ) : (
                <ChevronDown className="h-5 w-5 text-gray-500" />
              )}
            </div>

            {openCategory === category.id && (
              <div className="animate-in slide-in-from-top duration-300">
                <CardContent className="pt-0 pb-4 border-t hover:shadow-lg hover:scale-105">
                  <div className="grid grid-cols-2 gap-2 mt-3">
                    {category.subcategories.map((subcategory) => (
                      <Badge
                        key={subcategory.id}
                        variant={isSubcategorySelected(category.id, subcategory.id) ? "default" : "outline"}
                        className={`cursor-pointer justify-start py-2 px-3 ${isSubcategorySelected(category.id, subcategory.id)
                          ? "bg-blue-500 text-white hover:bg-blue-600"
                          : "bg-white text-gray-700 hover:bg-gray-100"
                          }`}
                        onClick={() => toggleSubcategory(category.id, subcategory.id)}
                      >
                        {isSubcategorySelected(category.id, subcategory.id) && <Check className="h-3 w-3 mr-1" />}
                        {subcategory.name}
                      </Badge>
                    ))}
                  </div>
                </CardContent>
              </div>
            )}
          </Card>
        ))}
      </div>

      <div className="flex justify-between items-center">
        <div>
          <p className="text-sm text-gray-500">{selectedCount} topics selected</p>
          <p className="text-xs text-gray-500">Select at least 3 topics to continue</p>
        </div>
        <Button
          onClick={handleSubmit}
          disabled={selectedCount < 3 || isSubmitting}
          className="min-w-[120px] bg-blue-500 hover:bg-blue-600 text-white"
        >
          {isSubmitting ? "Saving..." : "Continue"}
        </Button>
      </div>
      <p className="text-xs text-gray-500 mt-2">
        You'll need to select your interests each time you visit the news section.
      </p>
    </div>
  )
}

