import {Client, Account, Databases} from 'appwrite'

const client = new Client();

client.setEndpoint("http://localhost/v1").setProject(process.env.REACT_APP_APPWRITE_PROJECT)

export const account = new Account(client)

export const databases = new Databases(client, process.env.REACT_APP_APPWRITE_DB)
