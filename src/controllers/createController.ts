import { Request, Response } from "express";
import createService from "../services/createService.js";

export async function insertContact(req: Request, res: Response) {
  const data = req.body;
  await createService.insert(data);
  res.sendStatus(201);
}
