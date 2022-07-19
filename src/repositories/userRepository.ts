import db from "../database.js";
import { CreateUserData } from "../services/userService.js";

async function findById(id: number) {
  const users = db.collection("users");
  return users.findOne({ id });
}
async function findByEmail(email: string) {
  const users = db.collection("users");
  return users.findOne({ email });
}

async function insert(createUserData: CreateUserData) {
  const users = db.collection("users");
  return users.insertOne({ ...createUserData });
}

export default {
  findByEmail,
  findById,
  insert,
};
