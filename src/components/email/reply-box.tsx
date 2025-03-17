"use client"

import { useState } from "react"
import { X, Send } from "lucide-react"
import type { Email } from "@/lib/email/types"

interface ReplyBoxProps {
  email: Email
  onClose: () => void
}

export function ReplyBox({ email, onClose }: ReplyBoxProps) {
  const [replyContent, setReplyContent] = useState("")
  const [tone, setTone] = useState("neutral")

  const handleSend = () => {
    // Here you would typically send the email reply
    console.log("Sending reply:", replyContent)
    onClose()
  }

  const getSuggestedReply = () => {
    // This is where you'd integrate with an AI model to get suggestions
    // For now, we'll use some simple predefined responses
    const suggestions = {
      formal:
        "Thank you for your email regarding the meeting on Friday. I confirm my attendance and look forward to our discussion.",
      casual: "Thanks for the heads up about Friday's meeting. I'll be there!",
      friendly: "Hey there! Thanks for the reminder about our Friday catch-up. Looking forward to seeing everyone!",
      neutral: "Noted. I'll attend the meeting on Friday as scheduled.",
    }
    return suggestions[tone as keyof typeof suggestions] || suggestions.neutral
  }

  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white rounded-lg shadow-xl p-6 max-w-2xl w-full mx-4 relative">
        <button
          className="absolute right-2 top-2 p-2 rounded-full hover:bg-gray-100 transition-colors"
          onClick={onClose}
        >
          <X className="h-4 w-4 text-gray-500" />
        </button>

        <h2 className="text-xl font-semibold mb-4 text-gray-900">Reply to: {email.subject}</h2>

        <div className="mb-4">
          <select
            value={tone}
            onChange={(e) => setTone(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          >
            <option value="formal">Formal</option>
            <option value="casual">Casual</option>
            <option value="friendly">Friendly</option>
            <option value="neutral">Neutral</option>
          </select>
        </div>

        <textarea
          value={replyContent}
          onChange={(e) => setReplyContent(e.target.value)}
          placeholder="Type your reply here..."
          className="w-full min-h-[200px] p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent mb-4"
        />

        <div className="flex justify-between items-center">
          <button
            className="px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
            onClick={() => setReplyContent(getSuggestedReply())}
          >
            Get AI Suggestion
          </button>
          <button
            className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center"
            onClick={handleSend}
          >
            <Send className="mr-2 h-4 w-4" />
            Send Reply
          </button>
        </div>
      </div>
    </div>
  )
}

