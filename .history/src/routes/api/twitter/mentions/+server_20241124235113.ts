import { json } from '@sveltejs/kit';
import { RateLimitHandler } from '$lib/utils/rateLimitHandler';

const DEBUG = true;

function log(...args: any[]) {
    if (DEBUG) console.log('[Mentions API]:', ...args);
}

function logError(...args: any[]) {
    if (DEBUG) console.error('[Mentions API Error]:', ...args);
}

function formatResetTime(resetTimestamp: number) {
    const resetDate = new Date(resetTimestamp * 1000);
    return {
        date: resetDate.toLocaleString(),
        timeUntil: Math.floor((resetTimestamp * 1000 - Date.now()) / 1000),
    };
}

export async function GET({ request }) {
    try {
        const authHeader = request.headers.get('Authorization');
        log('Auth header present:', !!authHeader);

        if (!authHeader) {
            logError('No authorization header');
            return json({ error: 'No authorization header' }, { status: 401 });
        }

        // Use rate limit handler for the request
        const tweetsResponse = await RateLimitHandler.executeWithRetry(
            () => fetch(
                'https://api.twitter.com/2/users/me/tweets?' + 
                new URLSearchParams({
                    'max_results': '10',
                    'tweet.fields': 'conversation_id,created_at,public_metrics',
                    'expansions': 'referenced_tweets.id,in_reply_to_user_id',
                    'user.fields': 'name,username'
                }), {
                headers: {
                    'Authorization': authHeader,
                    'Content-Type': 'application/json'
                }
            }
        ), 'users/me/tweets');

        // Get and log rate limit info
        const rateLimitInfo = RateLimitHandler.getRateLimitInfo(tweetsResponse);
        const resetInfo = formatResetTime(rateLimitInfo.reset);
        
        log('Rate Limit Information:', {
            ...rateLimitInfo,
            resetDate: resetInfo.date,
            secondsUntilReset: resetInfo.timeUntil,
            resetDateISO: new Date(rateLimitInfo.reset * 1000).toISOString()
        });

        // Rest of your code...
    }
} 