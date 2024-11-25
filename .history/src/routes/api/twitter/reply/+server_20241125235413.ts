import { json } from '@sveltejs/kit';
import type { RequestHandler } from './$types';
import { TwitterApi } from 'twitter-api-v2';

export const POST: RequestHandler = async ({ request }) => {
    try {
        const authHeader = request.headers.get('authorization');
        if (!authHeader?.startsWith('Bearer ')) {
            return new Response('Unauthorized', { status: 401 });
        }

        const accessToken = authHeader.split(' ')[1];
        const twitterClient = new TwitterApi(accessToken);

        const { in_reply_to_tweet_id, text } = await request.json();

        // Post the reply
        const tweet = await twitterClient.v2.reply(
            text,
            in_reply_to_tweet_id
        );

        return json(tweet);
    } catch (error) {
        console.error('Error posting reply:', error);
        return new Response('Failed to post reply', { status: 500 });
    }
}; 