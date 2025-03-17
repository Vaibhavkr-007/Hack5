"use client"

import { Mail } from "lucide-react"

interface PermissionModalProps {
  onGrant: () => void
  onSkip: () => void
}

export function PermissionModal({ onGrant, onSkip }: PermissionModalProps) {
  return (
    <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center">
      <div className="bg-white border rounded-lg shadow-xl p-6 max-w-md w-full mx-4">
        <div className="flex flex-col items-center text-center">
          <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center mb-4">
            <Mail className="h-6 w-6 text-blue-600" />
          </div>
          <h2 className="text-xl font-semibold mb-2 text-gray-900">Connect Your Gmail Account</h2>
          <p className="text-gray-600 mb-6">
            To summarize your emails, we need access to your Gmail account. Your data is secure and will only be used
            for summarization.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 w-full">
            <button
              className="flex-1 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
              onClick={onGrant}
            >
              Grant Access
            </button>
            <button
              className="flex-1 px-4 py-2 border border-gray-300 rounded-md hover:bg-gray-50 transition-colors"
              onClick={onSkip}
            >
              Skip for Now
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

