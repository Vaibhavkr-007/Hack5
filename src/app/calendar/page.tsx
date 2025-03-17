import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function CalendarPage() {
  return (
    <div className="container max-w-md mx-auto py-12 px-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Task Management</CardTitle>
          <CardDescription>
            This feature is coming soon. You'll be able to connect your Twitter
            account and see relevant tweets.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild className="w-full">
            <Link href="/dashboard">Go to Dashboard</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
