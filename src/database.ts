import { MongoClient } from "mongodb";
import dotenv from "dotenv";
dotenv.config();

export const mongoClient = new MongoClient(process.env.MONGO_URI!);

await mongoClient.connect();
const db = mongoClient.db("pagaleve");

export default db;
