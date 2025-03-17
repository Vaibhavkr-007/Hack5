import { formatDistanceToNow } from "date-fns"
import { User, Calendar, Paperclip, Clock, ArrowRight } from "lucide-react"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Separator } from "@/components/ui/separator"
import type { Email } from "@/lib/email/types"

interface EmailRightPanelProps {
  email: Email
  relatedEmails: Email[]
}

export function EmailRightPanel({ email, relatedEmails }: EmailRightPanelProps) {
  return (
    <ScrollArea className="h-full">
      <div className="p-4">
        {/* Sender Information */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-3">Sender Information</h3>
          <div className="flex items-start">
            <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center text-primary mr-3">
              {email.sender.charAt(0)}
            </div>
            <div>
              <p className="font-medium">{email.sender}</p>
              <p className="text-sm text-muted-foreground">
                {email.id % 2 === 0 ? "Product Manager" : "Marketing Specialist"}
              </p>
              <p className="text-sm text-muted-foreground mt-1">
                Last interaction: {formatDistanceToNow(new Date(email.date), { addSuffix: true })}
              </p>
            </div>
          </div>
        </div>

        <Separator className="my-4" />

        {/* Email Metadata */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-3">Email Details</h3>
          <div className="space-y-2">
            <div className="flex items-center text-sm">
              <Calendar className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>Received: {new Date(email.date).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center text-sm">
              <User className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>From: {email.sender}</span>
            </div>
            <div className="flex items-center text-sm">
              <User className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>To: me</span>
            </div>
            {email.id % 3 === 0 && (
              <div className="flex items-center text-sm">
                <Paperclip className="h-4 w-4 mr-2 text-muted-foreground" />
                <span>2 Attachments</span>
              </div>
            )}
            <div className="flex items-center text-sm">
              <Clock className="h-4 w-4 mr-2 text-muted-foreground" />
              <span>Response time: 2 hours</span>
            </div>
          </div>
        </div>

        <Separator className="my-4" />

        {/* Email Thread Visualization */}
        <div className="mb-6">
          <h3 className="text-sm font-medium mb-3">Conversation Thread</h3>
          <div className="relative pl-4 border-l-2 border-muted space-y-3">
            <div className="relative">
              <div className="absolute -left-[17px] top-1 h-3 w-3 rounded-full bg-primary"></div>
              <p className="text-sm font-medium">{email.sender}</p>
              <p className="text-xs text-muted-foreground">Initial email</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[17px] top-1 h-3 w-3 rounded-full bg-muted"></div>
              <p className="text-sm font-medium">You</p>
              <p className="text-xs text-muted-foreground">Response</p>
            </div>
            <div className="relative">
              <div className="absolute -left-[17px] top-1 h-3 w-3 rounded-full bg-primary"></div>
              <p className="text-sm font-medium">{email.sender}</p>
              <p className="text-xs text-muted-foreground">Current email</p>
            </div>
          </div>
        </div>

        <Separator className="my-4" />

        {/* Related Emails */}
        {relatedEmails.length > 0 && (
          <div>
            <h3 className="text-sm font-medium mb-3">Related Emails</h3>
            <div className="space-y-3">
              {relatedEmails.map((relatedEmail) => (
                <div
                  key={relatedEmail.id}
                  className="border rounded-md p-3 hover:bg-muted/50 cursor-pointer transition-colors"
                >
                  <div className="flex justify-between items-start">
                    <p className="font-medium text-sm">{relatedEmail.sender}</p>
                    <p className="text-xs text-muted-foreground">
                      {formatDistanceToNow(new Date(relatedEmail.date), { addSuffix: true })}
                    </p>
                  </div>
                  <p className="text-sm truncate">{relatedEmail.subject}</p>
                  <p className="text-xs text-muted-foreground truncate">{relatedEmail.summary}</p>
                  <div className="flex items-center mt-2 text-xs text-primary">
                    <span>View email</span>
                    <ArrowRight className="h-3 w-3 ml-1" />
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </ScrollArea>
  )
}

