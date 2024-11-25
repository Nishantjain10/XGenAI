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
            log('Starting OAuth2 process');
            const state = crypto.randomUUID();
            const codeVerifier = generateCodeVerifier();
            log('Generated state:', state);
            log('Generated codeVerifier:', codeVerifier);

            // Store values
            if (typeof window !== 'undefined') {
                sessionStorage.setItem('oauth_state', state);
                sessionStorage.setItem('code_verifier', codeVerifier);
                log('Stored state and codeVerifier in sessionStorage');
            }

            const authUrl = // ... rest of the URL generation
            log('Generated auth URL:', authUrl);
            return authUrl;
        } catch (error) {
            logError('Error in generateAuthLink:', error);
            throw error;
        }
    },

    handleCallback: async (code: string, state: string) => {
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

            // Rest of the code...
        } catch (error) {
            logError('Error in handleCallback:', error);
            throw error;
        }
    }
}; 