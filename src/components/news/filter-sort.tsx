"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import { ChevronDown, SlidersHorizontal } from "lucide-react"
import { Badge } from "@/components/ui/badge"

const categories = ["All", "Technology", "Business", "Health", "Science", "Entertainment", "Sports"]

const subcategories = {
  Technology: ["AI", "Startups", "Gadgets", "Software"],
  Business: ["Finance", "Economy", "Entrepreneurship"],
  Health: ["Fitness", "Nutrition", "Mental Health"],
  Science: ["Space", "Environment", "Research"],
  Entertainment: ["Movies", "Music", "Celebrity"],
  Sports: ["Football", "Basketball", "Tennis"],
}

const sortOptions = [
  { label: "Latest", value: "latest" },
  { label: "Relevance", value: "relevance" },
  { label: "Most Read", value: "most-read" },
]

export default function FilterSort() {
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedSubcategories, setSelectedSubcategories] = useState<string[]>([])
  const [selectedSort, setSelectedSort] = useState(sortOptions[0])

  const handleCategorySelect = (category: string) => {
    setSelectedCategory(category)
    setSelectedSubcategories([])
  }

  const handleSubcategoryToggle = (subcategory: string) => {
    if (selectedSubcategories.includes(subcategory)) {
      setSelectedSubcategories(selectedSubcategories.filter((sc) => sc !== subcategory))
    } else {
      setSelectedSubcategories([...selectedSubcategories, subcategory])
    }
  }

  const handleSortSelect = (sort: (typeof sortOptions)[0]) => {
    setSelectedSort(sort)
  }

  const handleClearFilters = () => {
    setSelectedCategory("All")
    setSelectedSubcategories([])
  }

  return (
    <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 p-4 bg-gray-100/70 rounded-lg">
      <div className="flex flex-wrap gap-2">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-1">
              <SlidersHorizontal className="h-4 w-4 mr-1" />
              Categories
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            {categories.map((category) => (
              <DropdownMenuItem
                key={category}
                className="cursor-pointer"
                onClick={() => handleCategorySelect(category)}
              >
                {category}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        {selectedCategory !== "All" && (
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" className="flex items-center gap-1">
                Subcategories
                <ChevronDown className="h-4 w-4 ml-1" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start" className="w-56">
              {subcategories[selectedCategory as keyof typeof subcategories]?.map((subcategory) => (
                <DropdownMenuItem
                  key={subcategory}
                  className="cursor-pointer flex items-center justify-between"
                  onClick={() => handleSubcategoryToggle(subcategory)}
                >
                  {subcategory}
                  {selectedSubcategories.includes(subcategory) && <span className="h-2 w-2 rounded-full bg-primary" />}
                </DropdownMenuItem>
              ))}
            </DropdownMenuContent>
          </DropdownMenu>
        )}

        {(selectedCategory !== "All" || selectedSubcategories.length > 0) && (
          <Button variant="ghost" size="sm" onClick={handleClearFilters}>
            Clear filters
          </Button>
        )}
      </div>

      <div className="flex flex-wrap gap-2 items-center">
        {selectedCategory !== "All" && (
          <Badge variant="outline" className="bg-white">
            {selectedCategory}
          </Badge>
        )}

        {selectedSubcategories.map((subcategory) => (
          <Badge key={subcategory} variant="outline" className="bg-white">
            {subcategory}
          </Badge>
        ))}

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" className="flex items-center gap-1 ml-2">
              Sort: {selectedSort.label}
              <ChevronDown className="h-4 w-4 ml-1" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="w-40">
            {sortOptions.map((option) => (
              <DropdownMenuItem key={option.value} className="cursor-pointer" onClick={() => handleSortSelect(option)}>
                {option.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  )
}

