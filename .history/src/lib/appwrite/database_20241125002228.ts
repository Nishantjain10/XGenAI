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
    // Save tweet
    async saveTweet(tweet: Tweet) {
        try {
            return await databases.createDocument(
                DATABASE_ID,
                TWEETS_COLLECTION_ID,
                ID.unique(),
                tweet
            );
        } catch (error) {
            console.error('Error saving tweet:', error);
            throw error;
        }
    },

    // Save AI response
    async saveResponse(response: Response) {
        try {
            return await databases.createDocument(
                DATABASE_ID,
                RESPONSES_COLLECTION_ID,
                ID.unique(),
                response
            );
        } catch (error) {
            console.error('Error saving response:', error);
            throw error;
        }
    },

    // Get responses for a tweet
    async getResponsesForTweet(tweetId: string) {
        try {
            return await databases.listDocuments(
                DATABASE_ID,
                RESPONSES_COLLECTION_ID,
                [Query.equal('tweet_id', tweetId)]
            );
        } catch (error) {
            console.error('Error getting responses:', error);
            throw error;
        }
    },

    // Get all tweets for a user
    async getUserTweets(authorId: string) {
        try {
            return await databases.listDocuments(
                DATABASE_ID,
                TWEETS_COLLECTION_ID,
                [Query.equal('author_id', authorId)]
            );
        } catch (error) {
            console.error('Error getting user tweets:', error);
            throw error;
        }
    },

    // Update response posted status
    async updateResponseStatus(responseId: string, posted: boolean) {
        try {
            return await databases.updateDocument(
                DATABASE_ID,
                RESPONSES_COLLECTION_ID,
                responseId,
                { posted }
            );
        } catch (error) {
            console.error('Error updating response status:', error);
            throw error;
        }
    }
}; 