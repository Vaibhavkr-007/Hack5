"use client"

import { formatDistanceToNow } from "date-fns"
import { Star, AlertCircle, Clock, Tag } from "lucide-react"
import type { Email } from "@/lib/email/types"

interface EmailListProps {
  emails: Email[]
  onSelectEmail: (email: Email) => void
  selectedEmailId: number | null
}

export function EmailList({ emails, onSelectEmail, selectedEmailId }: EmailListProps) {
  if (emails.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center h-full">
        <p className="text-gray-500">No emails found</p>
      </div>
    )
  }

  // Get urgency level for visual indicators
  const getUrgencyLevel = (email: Email): "high" | "medium" | "low" => {
    // In a real app, this would use AI to determine urgency
    if (email.category === "Work") return "high"
    if (email.category === "Personal") return "medium"
    return "low"
  }

  // Get urgency icon based on level
  const getUrgencyIcon = (level: "high" | "medium" | "low") => {
    switch (level) {
      case "high":
        return <AlertCircle className="h-4 w-4 text-red-500" />
      case "medium":
        return <Clock className="h-4 w-4 text-amber-500" />
      case "low":
        return <Tag className="h-4 w-4 text-gray-400" />
    }
  }

  return (
    <div className="h-full overflow-auto">
      <div className="divide-y divide-gray-100">
        {emails.map((email) => {
          const urgencyLevel = getUrgencyLevel(email)
          const isSelected = email.id === selectedEmailId

          return (
            <div
              key={email.id}
              className={`flex cursor-pointer items-start p-4 hover:bg-blue-50 transition-colors ${
                isSelected ? "bg-blue-50" : ""
              }`}
              onClick={() => onSelectEmail(email)}
            >
              <div className="flex flex-col items-center mr-2 space-y-1">
                <button className="h-5 w-5 rounded-full p-0 text-gray-400 hover:text-yellow-400 transition-colors">
                  <Star className="h-4 w-4" />
                  <span className="sr-only">Star</span>
                </button>

                <div title={`${urgencyLevel} urgency`}>{getUrgencyIcon(urgencyLevel)}</div>
              </div>

              <div className="min-w-0 flex-1">
                <div className="flex items-center justify-between">
                  <p className="truncate font-medium text-gray-900">{email.sender}</p>
                  <p className="ml-2 shrink-0 text-xs text-gray-500">
                    {formatDistanceToNow(new Date(email.date), { addSuffix: true })}
                  </p>
                </div>
                <p className="truncate font-medium text-sm text-gray-800">{email.subject}</p>
                <p className="truncate text-sm text-gray-500">{email.summary}</p>
              </div>

              <span className="ml-2 shrink-0 px-2 py-0.5 text-xs rounded-full bg-gray-100 text-gray-800">
                {email.category}
              </span>
            </div>
          )
        })}
      </div>
    </div>
  )
}

