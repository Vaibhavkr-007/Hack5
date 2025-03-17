"use client"
import { ArrowLeft, User, Calendar, Paperclip } from "lucide-react"
import { formatDistanceToNow } from "date-fns"
import { Chatbot } from "@/components/email/chatbot"
import type { Email } from "@/lib/email/types"

interface EmailReadingPageProps {
  email: Email
  onBack: () => void
}

export function EmailReadingPage({ email, onBack }: EmailReadingPageProps) {
  return (
    <div className="flex h-full w-full">
      {/* Email Content - Left Side */}
      <div className="flex-1 overflow-hidden border-r">
        <div className="flex items-center gap-2 border-b p-4 bg-white">
          <button className="p-2 rounded-md hover:bg-gray-100 transition-colors" onClick={onBack}>
            <ArrowLeft className="h-4 w-4 text-gray-600" />
            <span className="sr-only">Back</span>
          </button>
          <h1 className="text-lg font-semibold truncate flex-1 text-gray-900">{email.subject}</h1>
        </div>

        <div className="overflow-auto h-[calc(100vh-8rem)] bg-white">
          <div className="p-6 max-w-3xl mx-auto">
            <div className="flex items-center mb-6">
              <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mr-4">
                {email.sender.charAt(0)}
              </div>
              <div>
                <p className="font-medium text-gray-900">{email.sender}</p>
                <p className="text-sm text-gray-500">
                  {email.id % 2 === 0 ? "Product Manager" : "Marketing Specialist"}
                </p>
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

            <div className="space-y-4 text-gray-800">
              <p className="text-lg">{email.summary}</p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget aliquam ultricies,
                nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl. Sed euismod, nisl eget aliquam ultricies, nunc
                nisl aliquet nunc, quis aliquam nisl nunc quis nisl.
              </p>
              <p>
                Nullam euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.
                Sed euismod, nisl eget aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.
              </p>
              <p>
                Praesent vel quam at turpis pulvinar commodo. Donec tincidunt, justo at fermentum feugiat, eros magna
                faucibus magna, vel rutrum erat massa vel orci. Fusce fermentum magna vel dolor maximus, at fermentum
                nunc rutrum. Sed at semper erat, sed tristique nisi.
              </p>
              <p className="mt-4">
                Best regards,
                <br />
                {email.sender}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Chatbot - Right Side */}
      <div className="w-1/3 bg-white border-l">
        <Chatbot email={email} />
      </div>
    </div>
  )
}

