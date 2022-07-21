import { ObjectId } from "mongodb";
import db from "../database.js";

export async function findById(user: any) {
  const list = db.collection("list");
  const userId = user.user.toString();

  return list.find({ userId: userId }).toArray();
}

export async function update(user: number, id: number, data: any) {
  const list = db.collection("list");
  return list.updateOne(
    { _id: id, _userId: user },
    { $set: { name: data.name, phone: data.phone, email: data.email } }
  );
}

export async function deleteContact(id: any) {
  const list = db.collection("list");
  return list.deleteOne({ _id: new ObjectId(id.id) });
}

export default {
  findById,
  update,
  deleteContact,
};
