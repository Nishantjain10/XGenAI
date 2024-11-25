import { json } from '@sveltejs/kit';

export async function GET({ request }) {
    try {
        const authHeader = request.headers.get('Authorization');
        if (!authHeader) {
            return json({ error: 'No authorization header' }, { status: 401 });
        }

        // Add delay to respect rate limits
        await new Promise(resolve => setTimeout(resolve, 1000));

        const userResponse = await fetch('https://api.twitter.com/2/users/me?' + 
            new URLSearchParams({
                'user.fields': 'id,name,username,profile_image_url'
            }), {
            headers: {
                'Authorization': authHeader,
                'Content-Type': 'application/json'
            }
        });

        if (userResponse.status === 429) {
            console.error('Rate limit exceeded');
            const retryAfter = userResponse.headers.get('Retry-After');
            return json({ 
                error: 'Rate limit exceeded', 
                retryAfter 
            }, { 
                status: 429,
                headers: {
                    'Retry-After': retryAfter || '60'
                }
            });
        }

        if (!userResponse.ok) {
            const error = await userResponse.json();
            console.error('User data error:', error);
            return json({ error: 'Failed to get user data' }, { status: userResponse.status });
        }

        const userData = await userResponse.json();
        console.log('User data fetched:', userData);

        return json(userData);
    } catch (error) {
        console.error('User data error:', error);
        return json({ error: 'Internal server error' }, { status: 500 });
    }
} 