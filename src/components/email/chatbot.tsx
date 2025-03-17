"use client"

import { useState } from "react"
import { Send } from "lucide-react"
import type { Email } from "@/lib/email/types"

interface ChatbotProps {
  email: Email
}

type Message = {
  role: "user" | "assistant"
  content: string
}

export function Chatbot({ email }: ChatbotProps) {
  const [messages, setMessages] = useState<Message[]>([
    {
      role: "assistant",
      content: `Hi there! I can help you draft a reply to "${email.subject}". What would you like to say?`,
    },
  ])
  const [inputMessage, setInputMessage] = useState("")
  const [tone, setTone] = useState("neutral")

  const handleSendMessage = () => {
    if (inputMessage.trim() === "") return;
  
    const newMessages: Message[] = [  // Explicitly define as Message[]
      ...messages,
      { role: "user", content: inputMessage },
      {
        role: "assistant",
        content: `Here's a ${tone} reply to "${email.subject}": 
        
  Dear ${email.sender},
  
  Thank you for your email regarding "${email.subject}". I've reviewed the details you shared.
  
  ${inputMessage}
  
  I appreciate your attention to this matter and look forward to our continued collaboration.
  
  Best regards,  
  [Your Name]`,
      },
    ];
  
    setMessages(newMessages);
    setInputMessage("");
  };
  

  const suggestedReplies = [
    "Thank you for your email.",
    "I'll get back to you shortly.",
    "Could you provide more details?",
  ]

  return (
    <div className="flex flex-col h-full">
      <div className="p-4 border-b bg-blue-50">
        <h2 className="text-lg font-semibold mb-2 text-gray-900">Reply Assistant</h2>
        <select
          className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          value={tone}
          onChange={(e) => setTone(e.target.value)}
        >
          <option value="formal">Formal</option>
          <option value="casual">Casual</option>
          <option value="friendly">Friendly</option>
          <option value="neutral">Neutral</option>
        </select>
      </div>

      <div className="flex-1 p-4 overflow-auto bg-gray-50">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-4 p-3 rounded-lg max-w-[85%] ${
              message.role === "user"
                ? "bg-blue-600 text-white ml-auto"
                : "bg-white border border-gray-200 text-gray-800"
            }`}
          >
            <div className="whitespace-pre-line">{message.content}</div>
          </div>
        ))}
      </div>

      <div className="p-4 border-t bg-white">
        <div className="flex flex-wrap gap-2 mb-2">
          {suggestedReplies.map((reply, index) => (
            <button
              key={index}
              className="px-3 py-1 text-sm bg-blue-50 text-blue-700 rounded-full hover:bg-blue-100 transition-colors"
              onClick={() => setInputMessage(reply)}
            >
              {reply}
            </button>
          ))}
        </div>
        <div className="flex gap-2">
          <input
            value={inputMessage}
            onChange={(e) => setInputMessage(e.target.value)}
            placeholder="Type your message..."
            className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
          />
          <button
            onClick={handleSendMessage}
            className="p-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
          >
            <Send className="h-5 w-5" />
          </button>
        </div>
      </div>
    </div>
  )
}

