"use client"

import {
  Archive,
  Inbox,
  Mail,
  Settings,
  Star,
  Tag,
  Briefcase,
  User,
  ShoppingCart,
  Clock,
  Trash,
  Send,
  FileText,
} from "lucide-react"

interface EmailSidebarProps {
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export function EmailSidebar({ activeCategory, onCategoryChange }: EmailSidebarProps) {
  const mainCategories = [
    { id: "inbox", name: "Inbox", icon: Inbox, count: 12 },
    { id: "starred", name: "Starred", icon: Star },
    { id: "sent", name: "Sent", icon: Send },
    { id: "drafts", name: "Drafts", icon: FileText, count: 3 },
    { id: "archive", name: "Archive", icon: Archive },
    { id: "spam", name: "Spam", icon: Tag },
    { id: "trash", name: "Trash", icon: Trash },
    { id: "read-later", name: "Read Later", icon: Clock, count: 5 },
  ]

  const customCategories = [
    { id: "work", name: "Work", icon: Briefcase, count: 8 },
    { id: "personal", name: "Personal", icon: User, count: 4 },
    { id: "promotions", name: "Promotions", icon: ShoppingCart },
  ]

  return (
    <div className="h-full flex flex-col bg-white">
      <div className="p-4 border-b">
        <div className="flex items-center mb-4">
          <Mail className="mr-2 h-5 w-5 text-blue-600" />
          <span className="text-lg font-semibold text-gray-900">Email</span>
        </div>
        <button className="w-full px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
          Compose
        </button>
      </div>

      <div className="flex-1 overflow-auto">
        <div className="p-2 space-y-1">
          {mainCategories.map((category) => (
            <button
              key={category.id}
              className={`w-full flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                activeCategory === category.id ? "bg-blue-100 text-blue-800" : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => onCategoryChange(category.id)}
            >
              <category.icon
                className={`mr-2 h-4 w-4 ${activeCategory === category.id ? "text-blue-600" : "text-gray-500"}`}
              />
              <span className="flex-1 text-left">{category.name}</span>
              {category.count && (
                <span
                  className={`ml-auto text-xs px-2 py-0.5 rounded-full ${
                    activeCategory === category.id ? "bg-blue-200 text-blue-800" : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {category.count}
                </span>
              )}
            </button>
          ))}

          <div className="pt-2 pb-1">
            <p className="px-3 text-xs font-medium text-gray-500">Categories</p>
          </div>

          {customCategories.map((category) => (
            <button
              key={category.id}
              className={`w-full flex items-center px-3 py-2 text-sm rounded-md transition-colors ${
                activeCategory === category.id ? "bg-blue-100 text-blue-800" : "text-gray-700 hover:bg-gray-100"
              }`}
              onClick={() => onCategoryChange(category.id)}
            >
              <category.icon
                className={`mr-2 h-4 w-4 ${activeCategory === category.id ? "text-blue-600" : "text-gray-500"}`}
              />
              <span className="flex-1 text-left">{category.name}</span>
              {category.count && (
                <span
                  className={`ml-auto text-xs px-2 py-0.5 rounded-full ${
                    activeCategory === category.id ? "bg-blue-200 text-blue-800" : "bg-gray-100 text-gray-700"
                  }`}
                >
                  {category.count}
                </span>
              )}
            </button>
          ))}
        </div>
      </div>

      <div className="p-4 border-t">
        <button className="w-full flex items-center px-3 py-2 text-sm rounded-md border border-gray-200 hover:bg-gray-50 transition-colors">
          <Settings className="mr-2 h-4 w-4 text-gray-500" />
          <span className="text-gray-700">Settings</span>
        </button>
      </div>
    </div>
  )
}

