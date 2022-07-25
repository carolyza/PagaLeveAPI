import { MongoClient } from "mongodb";
import dotenv from "dotenv";
import { list } from "./tests/mock/contactMock.js";
import { users } from "./tests/mock/userMock.js";
dotenv.config();
export const mongoClient = new MongoClient(process.env.MONGO_URI!);

await mongoClient.connect();
const db = mongoClient.db("pagaleveTest");

export default db;

async function seed() {
  await db.collection("users").deleteMany({});
  await db.collection("users").insertMany(users);

  await db.collection("list").deleteMany({});
  await db.collection("list").insertOne(list);

  mongoClient.close();
}

seed();
