import TopNavigation from "@/components/news/top-navigation";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Link from "next/link";

export default function TwitterPage() {
  return (
    <div className="container max-w-md mx-auto py-12 px-4">
      <Card className="w-full">
        <CardHeader>
          <CardTitle>Twitter Integration</CardTitle>
          <CardDescription>
            This feature is coming soon. You'll be able to connect your Twitter
            account and see relevant tweets.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Button asChild className="w-full">
            <Link href="/dashboard">Go to dashboard</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
