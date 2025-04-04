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



'use client'

import { useState, useEffect } from 'react';
import axios from 'axios';

const TwitterSearch = () => {
  const [query, setQuery] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchSuggestions = async () => {
      if (!query.trim()) return; // Skip if query is empty or just spaces

      setLoading(true);
      setError('');
      try {
        const response = await axios.get(`/api/twitter-search-sugg?query=${query}`);
        setSuggestions(response.data.data || []); // Assuming response contains an array of users in 'data'
      } catch (err) {
        setError('Error fetching suggestions');
      } finally {
        setLoading(false);
      }
    };

    const timer = setTimeout(() => fetchSuggestions(), 500); // Debounce delay (500ms)

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div>
      <input
        type="text"
        placeholder="Search for Twitter accounts"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="input"
      />
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      <ul>
        {suggestions.map((user: any) => (
          <li key={user.id}>
            <a href={`https://twitter.com/${user.username}`} target="_blank" rel="noopener noreferrer">
              {user.username}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TwitterSearch;
