"use client"

import { ArrowLeft, Archive, Star, Trash2, Reply, ReplyAll, Forward, Download, MoreHorizontal } from "lucide-react"
import { format } from "date-fns"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import type { Email } from "@/lib/email/types"

interface EmailDetailProps {
  email: Email
  onBack: () => void
}

export function EmailDetail({ email, onBack }: EmailDetailProps) {
  return (
    <div className="flex flex-col h-full w-full">
      {/* Email Header */}
      <div className="flex items-center gap-2 border-b p-4">
        <Button variant="ghost" size="icon" onClick={onBack} className="md:hidden">
          <ArrowLeft className="h-4 w-4" />
          <span className="sr-only">Back</span>
        </Button>

        <div className="flex-1 min-w-0">
          <h1 className="text-lg font-semibold truncate">{email.subject}</h1>
          <div className="flex items-center text-sm text-muted-foreground">
            <span className="truncate">{format(new Date(email.date), "PPP 'at' p")}</span>
          </div>
        </div>

        <div className="flex gap-1">
          <Button variant="ghost" size="icon" title="Archive">
            <Archive className="h-4 w-4" />
            <span className="sr-only">Archive</span>
          </Button>
          <Button variant="ghost" size="icon" title="Delete">
            <Trash2 className="h-4 w-4" />
            <span className="sr-only">Delete</span>
          </Button>
          <Button variant="ghost" size="icon" title="Star">
            <Star className="h-4 w-4" />
            <span className="sr-only">Star</span>
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="ghost" size="icon">
                <MoreHorizontal className="h-4 w-4" />
                <span className="sr-only">More</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>Mark as unread</DropdownMenuItem>
              <DropdownMenuItem>Move to folder</DropdownMenuItem>
              <DropdownMenuItem>Add label</DropdownMenuItem>
              <DropdownMenuItem>Mute thread</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      {/* Email Content */}
      <ScrollArea className="flex-1">
        <div className="p-6">
          <div className="max-w-3xl mx-auto">
            {/* Sender Info */}
            <div className="flex items-start mb-6 pb-4 border-b">
              <div className="h-10 w-10 rounded-full bg-muted flex items-center justify-center text-muted-foreground mr-3">
                {email.sender.charAt(0)}
              </div>
              <div className="flex-1 min-w-0">
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{email.sender}</p>
                    <p className="text-sm text-muted-foreground">To: me</p>
                  </div>
                  <div className="text-sm px-2 py-1 rounded-full bg-muted">{email.category}</div>
                </div>
              </div>
            </div>

            {/* Email Body */}
            <div className="prose prose-sm max-w-none">
              <p className="text-lg mb-4">{email.summary}</p>
              <p className="text-muted-foreground mb-6">
                This is a summarized version of the email. The original email may contain more details.
              </p>

              {/* Mock email content for demonstration */}
              <div className="bg-muted/30 p-4 rounded-md mb-6">
                <p>Hello,</p>
                <p className="my-4">
                  {email.summary} Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam euismod, nisl eget
                  aliquam ultricies, nunc nisl aliquet nunc, quis aliquam nisl nunc quis nisl.
                </p>
                <p>Best regards,</p>
                <p>{email.sender}</p>
              </div>
            </div>

            {/* Attachments (mock) */}
            {email.id % 3 === 0 && (
              <div className="mt-4 mb-6">
                <h3 className="text-sm font-medium mb-2">Attachments</h3>
                <div className="flex flex-wrap gap-2">
                  <div className="flex items-center gap-2 p-2 border rounded-md">
                    <Download className="h-4 w-4" />
                    <span className="text-sm">document.pdf</span>
                  </div>
                  <div className="flex items-center gap-2 p-2 border rounded-md">
                    <Download className="h-4 w-4" />
                    <span className="text-sm">image.jpg</span>
                  </div>
                </div>
              </div>
            )}

            {/* Reply Actions */}
            <div className="mt-6 pt-4 border-t flex flex-wrap gap-2">
              <Button variant="outline" className="flex items-center gap-1">
                <Reply className="h-4 w-4" />
                Reply
              </Button>
              <Button variant="outline" className="flex items-center gap-1">
                <ReplyAll className="h-4 w-4" />
                Reply All
              </Button>
              <Button variant="outline" className="flex items-center gap-1">
                <Forward className="h-4 w-4" />
                Forward
              </Button>
              <Button variant="outline" className="ml-auto">
                View Original Email
              </Button>
            </div>
          </div>
        </div>
      </ScrollArea>
    </div>
  )
}

