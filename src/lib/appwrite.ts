import { Client, Account, ID, Databases, Query } from 'appwrite';
import { PUBLIC_APPWRITE_ENDPOINT, PUBLIC_APPWRITE_PROJECT_ID } from '$env/static/public';

// Initialize Appwrite client for client-side operations
const client = new Client()
    .setEndpoint(PUBLIC_APPWRITE_ENDPOINT)
    .setProject(PUBLIC_APPWRITE_PROJECT_ID);

// Initialize services
export const account = new Account(client);
export const databases = new Databases(client);

// Database constants
const DATABASE_ID = '6742032c002536e4538f';
const COLLECTION_ID = '67420452002d85823af3';

// Add this interface for type safety
interface UserData {
  userId: string;
  twitterId: string;
  createdAt: string;
  lastLogin: string;
  accessToken: string;
  refreshToken?: string | null;
  name?: string;
  username?: string;
}

// Helper functions for auth
export const createAccount = async (email: string, password: string) => {
    try {
        const response = await account.create(
            ID.unique(),
            email,
            password
        );
        return response;
    } catch (error) {
        throw error;
    }
};

export const createSession = async (email: string, password: string) => {
    try {
        return await account.createEmailSession(email, password);
    } catch (error) {
        throw error;
    }
};

export const createAuth0Session = async () => {
    try {
        console.log('Starting Auth0 session creation...');
        const session = await account.createOAuth2Session(
            'auth0',
            'http://localhost:5173/dashboard',
            'http://localhost:5173/login'
        );
        console.log('Auth0 session created:', session);
        return session;
    } catch (error) {
        console.error('Auth0 session error details:', {
            error,
            message: error.message,
            code: error.code
        });
        throw error;
    }
};

export const getCurrentSession = async () => {
    try {
        const session = await account.getSession('current');
        return session;
    } catch (error) {
        return null;
    }
};

export const getCurrentUser = async () => {
    try {
        const session = await getCurrentSession();
        if (!session) return null;
        return await account.get();
    } catch (error) {
        return null;
    }
};

// Database helper functions
export const createDocument = async (data: UserData) => {
    try {
        return await databases.createDocument(
            DATABASE_ID,
            COLLECTION_ID,
            ID.unique(),
            data
        );
    } catch (error) {
        console.error('Error creating document:', error);
        throw error;
    }
};

export const listDocuments = async () => {
    try {
        return await databases.listDocuments(
            DATABASE_ID,
            COLLECTION_ID
        );
    } catch (error) {
        console.error('Error listing documents:', error);
        throw error;
    }
};

export const getDocument = async (documentId: string) => {
    try {
        return await databases.getDocument(
            DATABASE_ID,
            COLLECTION_ID,
            documentId
        );
    } catch (error) {
        console.error('Error getting document:', error);
        throw error;
    }
};

export const updateDocument = async (documentId: string, data: any) => {
    try {
        return await databases.updateDocument(
            DATABASE_ID,
            COLLECTION_ID,
            documentId,
            data
        );
    } catch (error) {
        console.error('Error updating document:', error);
        throw error;
    }
};

export const deleteDocument = async (documentId: string) => {
    try {
        return await databases.deleteDocument(
            DATABASE_ID,
            COLLECTION_ID,
            documentId
        );
    } catch (error) {
        console.error('Error deleting document:', error);
        throw error;
    }
};

export const deleteCurrentSession = async () => {
    try {
        await account.deleteSession('current');
    } catch (error) {
        console.error('Error deleting session:', error);
    }
};

// Add a function to find user by Twitter ID
export const findUserByTwitterId = async (twitterId: string) => {
    try {
        const response = await databases.listDocuments(
            DATABASE_ID,
            COLLECTION_ID,
            [
                Query.equal('twitterId', twitterId)
            ]
        );
        return response.documents[0] || null;
    } catch (error) {
        console.error('Error finding user:', error);
        return null;
    }
};

// Add this function to create an anonymous session
export const createAnonymousSession = async () => {
    try {
        return await account.createAnonymousSession();
    } catch (error) {
        console.error('Error creating anonymous session:', error);
        return null;
    }
}; 