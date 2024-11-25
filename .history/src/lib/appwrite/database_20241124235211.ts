import { Client, Databases, ID, Query } from 'appwrite';
import { PUBLIC_APPWRITE_ENDPOINT, PUBLIC_APPWRITE_PROJECT_ID } from '$env/static/public';

const client = new Client()
    .setEndpoint(PUBLIC_APPWRITE_ENDPOINT)
    .setProject(PUBLIC_APPWRITE_PROJECT_ID);

const databases = new Databases(client);

// Update with your specific IDs
const DATABASE_ID = '674348930004107bec0b';
const TWEETS_COLLECTION_ID = '6743489e000954d53e54';
const RESPONSES_COLLECTION_ID = '674348a3002a604521db';

export interface Tweet {
    tweet_id: string;          // Size: 32 chars
    author_id: string;         // Size: 32 chars
    author_username: string;   // Size: 50 chars
    content: string;          // Size: 280 chars (Twitter's limit)
    created_at: string;       // Size: 32 chars (ISO date string)
    size?: number;           // Size: Integer (optional, for tracking length)
}

export interface Response {
    tweet_id: string;         // Size: 32 chars
    content: string;          // Size: 280 chars (Twitter's limit)
    generated_at: string;     // Size: 32 chars (ISO date string)
    model: string;           // Size: 50 chars
    posted: boolean;         // Size: Boolean
    size?: number;          // Size: Integer (optional, for tracking length)
}

export const DatabaseService = {
    // ... rest of the code stays the same ...
}; 