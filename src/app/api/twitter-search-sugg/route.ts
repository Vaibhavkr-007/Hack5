// app/api/twitter/search/route.ts

import axios from 'axios';
import { NextResponse } from 'next/server';

// Get Twitter Bearer Token from environment variables
const TWITTER_BEARER_TOKEN = process.env.TWITTER_BEARER_TOKEN;

export async function GET(request: Request) {
  // Get the search query from the request
  const url = new URL(request.url);
  const query = url.searchParams.get('query');

  if (!query) {
    return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
  }

  try {
    // Construct the Twitter API endpoint for searching users
    const twitterApiUrl = `https://api.twitter.com/2/users/by?usernames=${query}`;
    

    // Make the request to the Twitter API with Bearer Token for authentication
    const response = await axios.get(twitterApiUrl, {
      headers: {
        Authorization: `Bearer ${TWITTER_BEARER_TOKEN}`,
      },
    });

    // Return the search results from Twitter
    return NextResponse.json(response.data);
  } catch (error) {
    console.error('Error fetching Twitter data:', error);
    return NextResponse.json({ error: 'Failed to fetch data from Twitter API' }, { status: 500 });
  }
}
