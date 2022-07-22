import { ObjectId } from "mongodb";
import db from "../database.js";

export async function findById(user: any) {
  const list = db.collection("list");
  const userId = user.user.toString();

  return list.find({ userId: userId }).toArray();
}

export async function update(id: string, userData: any) {
  const list = db.collection("list");
  return list.updateOne(
    { _id: new ObjectId(id) },
    {
      $set: {
        name: userData.name,
        phone: userData.phone,
        email: userData.email,
      },
    }
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
