import type { UserV2 } from 'twitter-api-v2';

export interface TwitterAuthResult {
    user: UserV2;
    accessToken: string;
    refreshToken: string | null;
}

export interface TwitterClient {
    generateAuthLink: () => Promise<string>;
    handleCallback: (token: string, verifier: string) => Promise<TwitterAuthResult>;
} 