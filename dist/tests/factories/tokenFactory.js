import { ObjectId } from "mongodb";
import supertest from "supertest";
import app from "../../app";
import * as userFactory from "./userFactory.js";
export default async function tokenFactory() {
    const body = userFactory.formatBodyCreateUser();
    await userFactory.createUser(body);
    return await supertest(app).post("/sign-in").send(body);
}
export const generateId = (id) => {
    const _id = id ? new ObjectId(id) : new ObjectId();
    return _id;
};
//# sourceMappingURL=tokenFactory.js.map