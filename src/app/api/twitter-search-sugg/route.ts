// app/api/twitter/search/route.ts

import { NextResponse } from 'next/server';
import needle from 'needle';

// Your Bearer Token for Twitter API
const BEARER_TOKEN = process.env.BEARER_TOKEN;

const endpointURL = "https://api.twitter.com/2/users/search";

// Function to search users by username (based on the query)
async function getTwitterUserSuggestions(query: string) {
    const params = {
        query: query, // Search query
        "user.fields": "created_at,description", // Optional fields you may want to include
        "max_results": 10, // Limit to 10 suggestions (adjust as needed)
    };

    try {
        const res = await needle('get', endpointURL, params, {
            headers: {
                "User-Agent": "v2UserSearchJS",
                "Authorization": `Bearer ${BEARER_TOKEN}`,
            },
        });

        if (res.body && res.body.data) {
            return res.body.data; // Return the list of suggested users
        } else {
            throw new Error('No users found');
        }
    } catch (error) {
        throw new Error(`Error fetching from Twitter API: ${error.message}`);
    }
}

export async function GET(request: Request) {
    const url = new URL(request.url);
    const query = url.searchParams.get('query');

    if (!query) {
        return NextResponse.json({ error: 'Query parameter is required' }, { status: 400 });
    }

    try {
        // Call the function to search users from Twitter API
        const response = await getTwitterUserSuggestions(query);

        // Return the user suggestions
        return NextResponse.json({ data: response });
    } catch (error) {
        console.error('Error fetching Twitter data:', error);
        return NextResponse.json({ error: error.message }, { status: 500 });
    }
}
