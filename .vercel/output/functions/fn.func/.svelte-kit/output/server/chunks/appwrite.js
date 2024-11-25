import { Client, Account, Databases } from "appwrite";
import { c as PUBLIC_APPWRITE_ENDPOINT, d as PUBLIC_APPWRITE_PROJECT_ID } from "./public.js";
const client = new Client().setEndpoint(PUBLIC_APPWRITE_ENDPOINT).setProject(PUBLIC_APPWRITE_PROJECT_ID);
new Account(client);
new Databases(client);
