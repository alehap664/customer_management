import { MongoClient, MongoClientOptions } from 'mongodb';

const uri = process.env.MONGODB_URI;
const options: MongoClientOptions = {};

if (!process.env.MONGODB_URI) {
  throw new Error('Please add your Mongo URI to .env.local');
}

const client = new MongoClient(uri, options);

export const Customer = client.db().collection<CustomerModel>('Customer');

export default client;
