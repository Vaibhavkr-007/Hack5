// import TopNavigation from "@/components/news/top-navigation";
// import { Button } from "@/components/ui/button";
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card";
// import Link from "next/link";
// import TwitterSearch from "@/components/twitter/account-search-add";

// export default function TwitterPage() {
//   return (
//     <div className="container max-w-md mx-auto py-12 px-4">
//       <Card className="w-full">
//         <CardHeader>
//           <CardTitle>Twitter Integration</CardTitle>
//           <CardDescription>
//             This feature is coming soon. You'll be able to connect your Twitter
//             account and see relevant tweets.
//           </CardDescription>
//         </CardHeader>
//         <CardContent>
//           <Button asChild className="w-full">
//             <Link href="/dashboard">Go to dashboard</Link>
//           </Button>
//         </CardContent>
//       </Card>
//     </div>
//   );
// }







"use client";

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
import TwitterSearch from "@/components/twitter/account-search-add";

export default function TwitterPage() {
  return (
    <div className="w-screen h-screen flex items-center justify-center p-4 bg-gray-100">
      <Card className="w-full max-w-2xl shadow-lg p-6">
        <CardHeader>
          <CardTitle className="text-center text-2xl">Twitter Integration</CardTitle>
          <CardDescription className="text-center">
            Search for a Twitter account and validate its existence.
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col items-center w-full">
          <TwitterSearch />
          <Button asChild className="w-full mt-6">
            <Link href="/dashboard">Go to dashboard</Link>
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}
