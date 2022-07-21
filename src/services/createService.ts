import dotenv from "dotenv";

import createRepository from "../repositories/createRepository.js";

dotenv.config();

export type CreateContactData = {
  userId: string;
  name: string;
  email: string;
  phone: string;
};

async function insert(data: CreateContactData) {
  const contact = await createRepository.insert({ ...data });

  return contact;
}

export default {
  insert,
};
