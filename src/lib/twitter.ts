import type { TwitterClient, TwitterAuthResult } from './types';
import { PUBLIC_TWITTER_CLIENT_ID } from '$env/static/public';

// Generate a random string for PKCE
function generateCodeVerifier() {
    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-._~';
    let result = '';
    const length = 128;
    for (let i = 0; i < length; i++) {
        result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
}

// Generate code challenge from verifier
async function generateCodeChallenge(verifier: string) {
    const encoder = new TextEncoder();
    const data = encoder.encode(verifier);
    const digest = await crypto.subtle.digest('SHA-256', data);
    return btoa(String.fromCharCode(...new Uint8Array(digest)))
        .replace(/\+/g, '-')
        .replace(/\//g, '_')
        .replace(/=+$/, '');
}

const DEBUG = true;

function log(...args: any[]) {
    if (DEBUG) console.log('[Twitter Client]:', ...args);
}

function logError(...args: any[]) {
    if (DEBUG) console.error('[Twitter Client Error]:', ...args);
}

export const twitterClient: TwitterClient = {
    generateAuthLink: async () => {
        try {
            // Clear any existing session data
            if (typeof window !== 'undefined') {
                sessionStorage.clear();
            }
            
            log('Starting OAuth2 process');
            
            const state = crypto.randomUUID();
            const codeVerifier = generateCodeVerifier();
            const codeChallenge = await generateCodeChallenge(codeVerifier);
            
            log('Generated state:', state);
            log('Generated codeVerifier:', codeVerifier);
            log('Generated codeChallenge:', codeChallenge);
            
            if (typeof window !== 'undefined') {
                sessionStorage.setItem('oauth_state', state);
                sessionStorage.setItem('code_verifier', codeVerifier);
            }

            const params = new URLSearchParams({
                response_type: 'code',
                client_id: PUBLIC_TWITTER_CLIENT_ID,
                redirect_uri: 'http://localhost:5173/auth/callback',
                scope: 'tweet.read users.read tweet.write offline.access',
                state: state,
                code_challenge: codeChallenge,
                code_challenge_method: 'S256'
            });
            
            const authUrl = `https://twitter.com/i/oauth2/authorize?${params.toString()}`;
            log('Generated auth URL:', authUrl);
            return authUrl;
        } catch (error) {
            logError('Error in generateAuthLink:', error);
            throw error;
        }
    },

    handleCallback: async (code: string, state: string): Promise<TwitterAuthResult> => {
        try {
            log('Starting callback handling');
            log('Received code:', code);
            log('Received state:', state);
            
            // Verify state
            const storedState = sessionStorage.getItem('oauth_state');
            const codeVerifier = sessionStorage.getItem('code_verifier');
            
            log('Stored state:', storedState);
            log('Stored codeVerifier:', codeVerifier);

            if (!storedState || !codeVerifier || storedState !== state) {
                logError('State verification failed');
                throw new Error('Invalid state parameter');
            }

            // Exchange code for tokens using our server endpoint
            const tokenResponse = await fetch('/api/twitter/token', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    code,
                    codeVerifier
                })
            });

            if (!tokenResponse.ok) {
                const errorData = await tokenResponse.json();
                console.error('Token response error:', errorData);
                throw new Error('Failed to get access token');
            }

            const tokens = await tokenResponse.json();
            console.log('Tokens received:', tokens);

            // Get user data using our proxy endpoint
            const userResponse = await fetch('/api/twitter/user', {
                headers: {
                    'Authorization': `Bearer ${tokens.access_token}`
                }
            });

            if (!userResponse.ok) {
                throw new Error('Failed to get user data');
            }

            const userData = await userResponse.json();
            console.log('User data:', userData);

            // Clear stored data
            sessionStorage.removeItem('oauth_state');
            sessionStorage.removeItem('code_verifier');

            return {
                user: userData.data,
                accessToken: tokens.access_token,
                refreshToken: tokens.refresh_token || null
            };
        } catch (error) {
            logError('Error in handleCallback:', error);
            throw error;
        }
    }
};