"use client"

import { useState } from "react"
import { EmailSidebar } from "@/components/email/email-sidebar"
import { EmailList } from "@/components/email/email-list"
import { EmailSummary } from "@/components/email/email-summary"
import { EmailReadingPage } from "@/components/email/email-reading-page"
import { EmptyState } from "@/components/email/empty-state"
import { Search, Filter, Plus, RefreshCw, ChevronDown, Menu } from "lucide-react"
import { dummyEmails } from "@/lib/email/dummy-data"
import type { Email } from "@/lib/email/types"

interface EmailDashboardProps {
  hasPermission: boolean | null
}

export function EmailDashboard({ hasPermission }: EmailDashboardProps) {
  const [selectedEmail, setSelectedEmail] = useState<Email | null>(null)
  const [searchQuery, setSearchQuery] = useState("")
  const [activeCategory, setActiveCategory] = useState("inbox")
  const [sortBy, setSortBy] = useState<"date" | "urgency" | "sender">("date")
  const [isReadingPage, setIsReadingPage] = useState(false)
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)
  const [dropdownOpen, setDropdownOpen] = useState(false)

  // Filter and sort emails
  const filteredAndSortedEmails = dummyEmails
    .filter((email) => {
      const matchesSearch =
        email.sender.toLowerCase().includes(searchQuery.toLowerCase()) ||
        email.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
        email.summary.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesCategory =
        activeCategory === "inbox" || email.category.toLowerCase() === activeCategory.toLowerCase()

      return matchesSearch && matchesCategory
    })
    .sort((a, b) => {
      if (sortBy === "date") {
        return new Date(b.date).getTime() - new Date(a.date).getTime()
      } else if (sortBy === "urgency") {
        const urgencyMap: Record<string, number> = { Work: 3, Personal: 2, Promotions: 1 }
        return (urgencyMap[b.category] || 0) - (urgencyMap[a.category] || 0)
      } else if (sortBy === "sender") {
        return a.sender.localeCompare(b.sender)
      }
      return 0
    })

  if (hasPermission === null) {
    return (
      <div className="flex items-center justify-center h-screen">
        <p className="text-gray-600">Loading...</p>
      </div>
    )
  }

  if (!hasPermission) {
    return (
      <div className="flex items-center justify-center h-screen bg-blue-50">
        <div className="text-center p-8 bg-white rounded-lg shadow-md max-w-md">
          <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mx-auto mb-6">
            <Search className="h-8 w-8" />
          </div>
          <h2 className="text-2xl font-semibold mb-4 text-gray-900">Welcome to Email Summarizer</h2>
          <p className="text-gray-600 mb-6">Connect your Gmail account to view and summarize your emails.</p>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors">
            Connect Gmail
          </button>
        </div>
      </div>
    )
  }

  // If we're in reading page mode, show the reading page
  if (isReadingPage && selectedEmail) {
    return <EmailReadingPage email={selectedEmail} onBack={() => setIsReadingPage(false)} />
  }

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      {/* Sidebar */}
      <div className={`${isSidebarOpen ? "block" : "hidden"} md:block md:w-64 border-r bg-white`}>
        <EmailSidebar activeCategory={activeCategory} onCategoryChange={setActiveCategory} />
      </div>

      {/* Main Content */}
      <div className="flex flex-col flex-1 overflow-hidden">
        {/* Top Bar */}
        <div className="flex items-center gap-2 p-4 border-b bg-white shadow-sm">
          <button
            className="md:hidden p-2 rounded-md hover:bg-gray-100 transition-colors"
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
          >
            <Menu className="h-4 w-4 text-gray-600" />
          </button>
          <div className="relative flex-1 max-w-md">
            <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search emails..."
              className="w-full pl-8 pr-10 py-2 border border-gray-200 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button className="absolute right-1 top-1 p-1.5 rounded-md hover:bg-gray-100 transition-colors">
              <Filter className="h-4 w-4 text-gray-600" />
            </button>
          </div>

          <button className="p-2 rounded-md hover:bg-gray-100 transition-colors">
            <Plus className="h-4 w-4 text-gray-600" />
          </button>
          <button className="p-2 rounded-md hover:bg-gray-100 transition-colors">
            <RefreshCw className="h-4 w-4 text-gray-600" />
          </button>
          <div className="relative">
            <button
              className="p-2 rounded-md hover:bg-gray-100 transition-colors"
              onClick={() => setDropdownOpen(!dropdownOpen)}
            >
              <ChevronDown className="h-4 w-4 text-gray-600" />
            </button>
            {dropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10 border border-gray-200">
                <div className="py-1">
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                    onClick={() => {
                      setSortBy("date")
                      setDropdownOpen(false)
                    }}
                  >
                    Sort by Date
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                    onClick={() => {
                      setSortBy("urgency")
                      setDropdownOpen(false)
                    }}
                  >
                    Sort by Urgency
                  </button>
                  <button
                    className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-blue-700"
                    onClick={() => {
                      setSortBy("sender")
                      setDropdownOpen(false)
                    }}
                  >
                    Sort by Sender
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Email Content */}
        <div className="flex flex-1 overflow-hidden">
          {/* Email List */}
          <div className={`${selectedEmail ? "hidden md:block md:w-1/2" : "w-full"} border-r overflow-auto bg-white`}>
            <EmailList
              emails={filteredAndSortedEmails}
              onSelectEmail={setSelectedEmail}
              selectedEmailId={selectedEmail?.id!}
            />
          </div>

          {/* Email Summary */}
          <div className={`${selectedEmail ? "w-full md:w-1/2" : "hidden"} overflow-auto bg-white`}>
            {selectedEmail ? (
              <EmailSummary email={selectedEmail} onReadFull={() => setIsReadingPage(true)} />
            ) : (
              <EmptyState message="Select an email to view details" />
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

