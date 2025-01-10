import { Client, Account, Databases } from 'appwrite';

export const appwriteConfig = {
    projectId: 					process.env.NEXT_PUBLIC_APPWRITE_PROJECT_ID,
	url: 						process.env.NEXT_PUBLIC_APPWRITE_URL,
	databaseId: 				process.env.NEXT_PUBLIC_DATABASE_ID,
    quoteCollectionId:          process.env.NEXT_PUBLIC_APPWRITE_QUOTE_COLLECTION_ID,
    likesCollectionId:          process.env.NEXT_PUBLIC_APPWRITE_LIKES_COLLECTION_ID
}

export const client = new Client();

client.setEndpoint(appwriteConfig.url as string).setProject(appwriteConfig.projectId as string); // Replace with your project ID

export const account = new Account(client);
export const databases = new Databases(client);
export { ID } from 'appwrite';