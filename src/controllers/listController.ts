import { Request, Response } from "express";
import listService from "../services/listService.js";

export async function getList(req: Request, res: Response) {
  const user = req.params;

  const list = await listService.getList(user);

  res.send(list);
}

export async function updateList(req: Request, res: Response) {
  const userData = req.body;
  const id = req.params.id;
  const list = await listService.updateList(id, userData);
  res.send(list);
}

export async function deleteContact(req: Request, res: Response) {
  const id = req.params;

  const list = await listService.deleteContact(id);
  res.send(list);
}

// export async function getUser(req: Request, res: Response) {
//   const authorization = req.headers.authorization;
//   const token = authorization?.replace("Bearer ", "");

//   const session = await listService.findSession({ token });

//   const user = await listService.findUser({ _id: session.userId });

//   res.send(user);
// }
