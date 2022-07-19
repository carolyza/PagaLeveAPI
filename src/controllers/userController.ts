import { Request, Response } from "express";
import userService from "../services/userService.js";

export async function signUp(req: Request, res: Response) {
  const user = req.body;

  await userService.signUp(user);

  res.sendStatus(201);

  //   try {
  //     const userInfo = req.body;
  //     const users = db.collection("users");
  //     const passwordHashed = bcrypt.hashSync(userInfo.password, 10);

  //     await users.insertOne({ ...userInfo, password: passwordHashed });

  //     res.sendStatus(201);
  //   } catch (error) {
  //     console.log(error);
  //     res.sendStatus(500);
  //   }
}

export async function signIn(req: Request, res: Response) {
  const user = req.body;

  const token = await userService.signIn(user);

  res.send({ token });

  //   const users = db.collection("users");

  //   const { email, password } = req.body;

  //   try {
  //     const login = await users.findOne({ email });
  //     const name = login!.name;
  //     const Authorized = bcrypt.compareSync(password, login!.password);

  //     if (!login) {
  //       res.sendStatus(401);
  //       return;
  //     }

  //     if (Authorized) {
  //       const token = uuid();
  //       await db.collection("session").insertOne({ token, idUser: login._id });
  //       res.send({ name, token });

  //       return;
  //     }
  //     console.log("OK");
  //     res.sendStatus(401);
  //   } catch (error) {
  //     console.log(error);
  //     res.sendStatus(500);
  //   }
}
