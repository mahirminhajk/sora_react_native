import SignIn from "@/app/(auth)/sign-in";
import { Account, Avatars, Client, Databases, ID, Query } from "react-native-appwrite";

export const appwriteConfig = {
  endpoint: process.env.END_POINT,
  platform: process.env.PLATFORM,
  projectId: process.env.PROJECT_ID,
  databaseId: process.env.DATABASE_ID,
  userCollectionId: process.env.USER_COLLECTION_ID,
  videoCollectionId: process.env.VIDEO_COLLECTION_ID,
  storageId: process.env.STORAGE_ID,
};

// Init your React Native SDK
const client = new Client();

client
  .setEndpoint(appwriteConfig.endpoint)
  .setProject(appwriteConfig.projectId)
  .setPlatform(appwriteConfig.platform);

const account = new Account(client);
const avatar = new Avatars(client);
const databases = new Databases(client);

export const createUser = async (
  email: string,
  password: string,
  username: string
) => {
  try {
    const newAccount = await account.create(
      ID.unique(),
      email,
      password,
      username
    );

    if (!newAccount) {
      throw new Error("Account not created");
    }

    const avatarUrl = await avatar.getInitials(username);

    await signIn(email, password);

    const newUser = await databases.createDocument(
      appwriteConfig.databaseId,
      appwriteConfig.userCollectionId,
      ID.unique(),
      {
        accountId: newAccount.$id,
        email,
        username,
        avatar: avatarUrl,
      }
    );

    return newUser;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};

export const signIn = async (email: string, password: string) => {
  try {
    const currentsession = await account.listSessions();
    if (currentsession.sessions.length > 0) {
      await account.deleteSession('current');
    }

    const session = await account.createEmailPasswordSession(
      email,
      password
    );
    return session;
  } catch (error) {
    console.log(error);
    throw new Error(error);
  }
};


export const getCurrentUser = async () => {
    try {
        const cureentAccont = await account.get();

        if(!cureentAccont) {
            throw new Error("Account not found");
        }

        const currentUser = await databases.listDocuments(
            appwriteConfig.databaseId,
            appwriteConfig.userCollectionId,
            [Query.equal('accountId', cureentAccont.$id)]
        );

        if (!currentUser) {
            throw new Error("User not found");
        }

        return currentUser.documents[0];
    } catch (error) {
        console.log(error);
        throw new Error(error);
        
    }
};
