"use client"

import { useState } from "react"
import { formatDistanceToNow } from "date-fns"
import { User, Calendar, Paperclip, Mail, ArrowRight } from "lucide-react"
import { ReplyBox } from "@/components/email/reply-box"
import type { Email } from "@/lib/email/types"
interface EmailSummaryProps {
  email: Email
  onReadFull: () => void
}

export function EmailSummary({ email, onReadFull }: EmailSummaryProps) {
  const [showReplyBox, setShowReplyBox] = useState(false)

  return (
    <>
      <div className="h-full overflow-auto p-6">
        <div className="max-w-2xl mx-auto">
          <h2 className="text-2xl font-bold mb-4 text-gray-900">{email.subject}</h2>

          <div className="flex items-center mb-6">
            <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
              {email.sender.charAt(0)}
            </div>
            <div>
              <p className="font-medium text-gray-900">{email.sender}</p>
              <p className="text-sm text-gray-500">{email.id % 2 === 0 ? "Product Manager" : "Marketing Specialist"}</p>
            </div>
          </div>

          <div className="space-y-4 mb-6">
            <div className="flex items-center text-sm text-gray-600">
              <Calendar className="h-4 w-4 mr-2 text-gray-400" />
              <span>Received: {formatDistanceToNow(new Date(email.date), { addSuffix: true })}</span>
            </div>
            <div className="flex items-center text-sm text-gray-600">
              <User className="h-4 w-4 mr-2 text-gray-400" />
              <span>To: me</span>
            </div>
            {email.id % 3 === 0 && (
              <div className="flex items-center text-sm text-gray-600">
                <Paperclip className="h-4 w-4 mr-2 text-gray-400" />
                <span>2 Attachments</span>
              </div>
            )}
          </div>

          <div className="mb-6 p-4 bg-blue-50 rounded-lg border border-blue-100">
            <p className="text-lg mb-4 text-gray-800">{email.summary}</p>
            <p className="text-gray-500 text-sm">
              This is a summarized version of the email. Click the button below to read the full content.
            </p>
          </div>

          <div className="flex gap-4">
            <button
              onClick={onReadFull}
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors flex items-center justify-center"
            >
              Read Full Email
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
            <button
              onClick={() => setShowReplyBox(true)}
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors flex items-center justify-center"
            >
              <Mail className="mr-2 h-4 w-4 text-blue-600" />
              <span>Reply</span>
            </button>
          </div>
        </div>
      </div>
      {showReplyBox && <ReplyBox email={email} onClose={() => setShowReplyBox(false)} />}
    </>
  )
}

