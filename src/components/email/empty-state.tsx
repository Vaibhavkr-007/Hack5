import { Mail } from "lucide-react"

interface EmptyStateProps {
  message: string
}

export function EmptyState({ message }: EmptyStateProps) {
  return (
    <div className="flex flex-col items-center justify-center h-full p-8 text-center">
      <div className="h-16 w-16 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 mb-4">
        <Mail className="h-8 w-8" />
      </div>
      <h3 className="text-lg font-medium mb-2 text-gray-900">{message}</h3>
      <p className="text-gray-500 max-w-md">
        Your inbox is looking great! Select an email to view its details or use the search to find specific emails.
      </p>
    </div>
  )
}

