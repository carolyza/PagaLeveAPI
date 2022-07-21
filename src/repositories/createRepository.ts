import db from "../database.js";
import { CreateContactData } from "../services/createService.js";

export async function insert(data: CreateContactData) {
  const list = db.collection("list");
  return list.insertOne({ ...data });
}

export default {
  insert,
};
