"use client"

import { useState, useEffect } from "react"
import { EmailDashboard } from "@/components/email/email-dashboard"
import { PermissionModal } from "@/components/email/permission-tab.tsx"

export default function EmailsPage() {
  const [hasGrantedPermission, setHasGrantedPermission] = useState<boolean | null>(null)

  useEffect(() => {
    // Check if user has already granted permission
    const permission = localStorage.getItem("emailPermission")
    setHasGrantedPermission(permission === "granted")
  }, [])

  const handleGrantAccess = () => {
    // In a real app, this would trigger the Gmail OAuth flow
    localStorage.setItem("emailPermission", "granted")
    setHasGrantedPermission(true)
  }

  const handleSkip = () => {
    localStorage.setItem("emailPermission", "skipped")
    setHasGrantedPermission(false)
  }

  // Show loading state while checking permission
  if (hasGrantedPermission === null) {
    return (
      <div className="flex items-center justify-center flex-1 h-screen bg-blue-50">
        <div className="p-8 bg-white rounded-lg shadow-md">
          <div className="flex items-center space-x-4">
            <div className="w-6 h-6 border-4 border-blue-600 border-t-transparent rounded-full animate-spin"></div>
            <p className="text-gray-700">Loading your emails...</p>
          </div>
        </div>
      </div>
    )
  }

  return (
    <>
      {!hasGrantedPermission && <PermissionModal onGrant={handleGrantAccess} onSkip={handleSkip} />}
      <EmailDashboard hasPermission={hasGrantedPermission} />
    </>
  )
}

