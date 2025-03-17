"use client"

import { formatDistanceToNow } from "date-fns"
import { Star, MoreHorizontal } from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Badge } from "@/components/ui/badge"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import type { Email } from "@/lib/email/types"

interface EmailGridViewProps {
  emails: Email[]
  onSelectEmail: (id: number) => void
  selectedEmailId: number | null
}

export function EmailGridView({ emails, onSelectEmail, selectedEmailId }: EmailGridViewProps) {
  if (emails.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center p-8 text-center h-full">
        <p className="text-muted-foreground">No emails found</p>
      </div>
    )
  }

  return (
    <ScrollArea className="h-full">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {emails.map((email) => {
          const isSelected = email.id === selectedEmailId

          return (
            <div
              key={email.id}
              className={cn(
                "flex flex-col h-[200px] border rounded-lg overflow-hidden cursor-pointer hover:shadow-md transition-all",
                isSelected && "ring-2 ring-primary",
              )}
              onClick={() => onSelectEmail(email.id)}
            >
              <div className="flex items-center justify-between p-3 bg-muted/30">
                <div className="flex items-center space-x-2">
                  <div className="h-8 w-8 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    {email.sender.charAt(0)}
                  </div>
                  <div>
                    <p className="font-medium text-sm truncate max-w-[120px]">{email.sender}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatDistanceToNow(new Date(email.date), { addSuffix: true })}
                    </p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Button variant="ghost" size="icon" className="h-7 w-7">
                    <Star className="h-4 w-4" />
                  </Button>
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="icon" className="h-7 w-7">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>Archive</DropdownMenuItem>
                      <DropdownMenuItem>Delete</DropdownMenuItem>
                      <DropdownMenuItem>Mark as read</DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>

              <div className="p-3 flex-1 flex flex-col">
                <h3 className="font-medium mb-1 truncate">{email.subject}</h3>
                <p className="text-sm text-muted-foreground line-clamp-3 flex-1">{email.summary}</p>
                <div className="mt-2">
                  <Badge variant="outline" className="text-xs">
                    {email.category}
                  </Badge>
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </ScrollArea>
  )
}

