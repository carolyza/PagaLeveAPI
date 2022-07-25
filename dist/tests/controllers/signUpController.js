import supertest from "supertest";
import app from "../../app.js";
import * as userFactory from "../factories/userFactory.js";
import db from "../../database.js";
export async function createUser() {
    const body = userFactory.formatBodyCreateUser();
    const result = await supertest(app).post("/sign-up").send(body);
    const user = await db.collection("users").findOne({
        email: body.email,
    });
    expect(result.status).toEqual(201);
    expect(user).not.toBeNull();
}
export async function sameEmail() {
    const body = userFactory.formatBodyCreateUser();
    await supertest(app).post("/sign-up").send(body);
    const result = await supertest(app).post("/sign-up").send(body);
    expect(result.status).toEqual(409);
}
//# sourceMappingURL=signUpController.js.map