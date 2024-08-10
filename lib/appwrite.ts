import { Account, Client, ID } from "react-native-appwrite";

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

export const createUser = async (email, password, username) => {
  // Register User
  account.create(ID.unique(), "me@example.com", "password", "Jane Doe").then(
    function (response) {
      console.log(response);
    },
    function (error) {
      console.log(error);
    }
  );
};
