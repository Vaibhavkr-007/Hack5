"use client"

import { Button } from "@/components/ui/button"
import { Twitter, Facebook, Linkedin, Link } from "lucide-react"
import { toast } from "sonner" // Import Sonner's toast function

interface ShareButtonsProps {
  url: string
  title: string
}

export default function ShareButtons({ url, title }: ShareButtonsProps) {
  const fullUrl = `https://example.com${url}`

  const handleCopyLink = () => {
    navigator.clipboard
      .writeText(fullUrl)
      .then(() => {
        // Use Sonner's toast for success notification
        toast.success("Link copied to clipboard!")
      })
      .catch(() => {
        // Use Sonner's toast for error notification
        toast.error("Failed to copy link.")
      })
  }

  const handleShare = (platform: string) => {
    let shareUrl = ""

    switch (platform) {
      case "twitter":
        shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(fullUrl)}`
        break
      case "facebook":
        shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(fullUrl)}`
        break
      case "linkedin":
        shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(fullUrl)}`
        break
      default:
        return
    }

    window.open(shareUrl, "_blank", "width=600,height=400")
  }

  return (
    <div className="flex items-center gap-1 bg-white border rounded-lg p-1 shadow-sm">
      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 rounded-md"
        onClick={() => handleShare("twitter")}
      >
        <Twitter className="h-4 w-4" />
        <span className="sr-only">Share on Twitter</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 rounded-md"
        onClick={() => handleShare("facebook")}
      >
        <Facebook className="h-4 w-4" />
        <span className="sr-only">Share on Facebook</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 rounded-md"
        onClick={() => handleShare("linkedin")}
      >
        <Linkedin className="h-4 w-4" />
        <span className="sr-only">Share on LinkedIn</span>
      </Button>

      <Button
        variant="ghost"
        size="icon"
        className="h-8 w-8 rounded-md"
        onClick={handleCopyLink}
      >
        <Link className="h-4 w-4" />
        <span className="sr-only">Copy link</span>
      </Button>
    </div>
  )
}