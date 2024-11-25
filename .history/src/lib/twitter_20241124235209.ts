// Update the generateAuthLink function
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
} 