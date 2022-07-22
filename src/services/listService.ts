import bcrypt from "bcrypt";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import listRepository from "../repositories/listRepository.js";
import {
  conflictError,
  notFoundError,
  unauthorizedError,
} from "../utils/errorUtils.js";
dotenv.config();

async function getList(user: any) {
  const list = await listRepository.findById(user);

  if (!list) throw notFoundError("Contact list not found");

  return list;
}

async function updateList(id: string, userData: any) {
  const list = await listRepository.update(id, userData);
  if (!list) throw notFoundError("Contact list not found");

  return list;
}

async function deleteContact(id: any) {
  const list = await listRepository.deleteContact(id);
  if (!list) throw notFoundError("Contact not found");

  return list;
}

export default {
  getList,
  updateList,
  deleteContact,
};
