import { Client, Databases } from 'appwrite';
import { PUBLIC_APPWRITE_ENDPOINT, PUBLIC_APPWRITE_PROJECT_ID, PUBLIC_APPWRITE_API_KEY } from '$env/static/private';

// Initialize server-side client with API key
const serverClient = new Client()
    .setEndpoint(PUBLIC_APPWRITE_ENDPOINT)
    .setProject(PUBLIC_APPWRITE_PROJECT_ID)
    .setKey(PUBLIC_APPWRITE_API_KEY);

export const serverDatabases = new Databases(serverClient); 