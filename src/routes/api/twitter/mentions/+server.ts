import { json } from '@sveltejs/kit';
import { generateMockMentions } from '$lib/utils/mockData';

export async function GET({ request }) {
    try {
        const authHeader = request.headers.get('Authorization');
        if (!authHeader) {
            return json({ error: 'No authorization header' }, { status: 401 });
        }

        const url = new URL('https://api.twitter.com/2/users/me/mentions');
        url.searchParams.append('max_results', '20');
        url.searchParams.append('tweet.fields', 'created_at,author_id,conversation_id');
        url.searchParams.append('expansions', 'author_id');
        url.searchParams.append('user.fields', 'id,name,username,profile_image_url');

        const mentionsResponse = await fetch(url, {
            headers: {
                'Authorization': authHeader,
                'Content-Type': 'application/json'
            }
        });

        if (mentionsResponse.status === 429) {
            console.log('Rate limited, returning mock data');
            const mockData = generateMockMentions(5);
            return json(mockData);
        }

        if (!mentionsResponse.ok) {
            console.error('Mentions error, falling back to mock data');
            const mockData = generateMockMentions(5);
            return json(mockData);
        }

        const mentionsData = await mentionsResponse.json();
        return json(mentionsData);
    } catch (error) {
        console.error('Mentions error:', error);
        const mockData = generateMockMentions(5);
        return json(mockData);
    }
} 