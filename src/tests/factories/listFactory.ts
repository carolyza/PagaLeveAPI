import db from "../../database.js";
import { faker } from "@faker-js/faker";
import { CreateContactData } from "../../services/createService.js";
import createRepository from "../../repositories/createRepository.js";
import { list } from "../mock/contactMock";
export function formatBodyCreateId(id: string) {
  return {
    userId: id,
  };
}

export async function getIds() {
  const id = `P${faker.datatype.number(6)}`;

  await db.collection("list").updateOne(
    {
      userId: id,
    },
    {
      $set: {
        userId: id,
      },
    },
    { upsert: true }
  );

  return id;
}

export async function getCustomerId(phone: string) {
  const user = await db.collection("list").findOne({
    phone: phone,
  });

  console.log(user!._id);

  return user!._id;
}

export async function createUserList(list: CreateContactData) {
  const insertedUser = await createRepository.insert({
    ...list,
  });

  return insertedUser;
}

export function formatBodyCreateContact(): CreateContactData {
  return {
    ...list,
  };
}

export async function deleteContact() {}
