import db from "../database.js";
import { Request, Response, NextFunction } from "express";

export async function validateTokenMiddleware(
  req: Request,
  res: Response,
  next: NextFunction
) {
  const authorization = req.headers.authorization;
  const token = authorization?.replace("Bearer ", "");

  try {
    const conection = await db.collection("conection").findOne({ token });

    if (!conection) {
      console.log("problema");
      return res.sendStatus(401);
    }

    const user = await db
      .collection("users")
      .findOne({ _id: conection.userId });
    if (!user) {
      return res.sendStatus(401);
    }
    delete user.password;
    res.locals.user = user;
    next();
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
}
