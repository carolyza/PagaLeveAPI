import * as signInControllerTest from "./controllers/signInController.js";
import * as signUpControllerTest from "./controllers/signUpController.js";
import * as listControllerTest from "./controllers/listController.js";
import db from "../database.js";
import mongoClient from "../database.js";

beforeEach(() => deleteAll());

async function deleteAll() {
  await db.collection("list").deleteMany({});
  await db.collection("users").deleteMany({});
}

describe("POST /sign-up", () => {
  it(
    "should return 409 when the email is already in use",
    signUpControllerTest.sameEmail
  );

  it("Should return 201 when create user", signUpControllerTest.createUser);
});

describe("POST /sign-in", () => {
  it(
    "should answer with status 200 when given valid credentials",
    signInControllerTest.login
  );

  it(
    "should return 409 when the email is incorrect",
    signInControllerTest.incorrectEmail
  );

  it(
    "should return 409 when the password is incorrect",
    signInControllerTest.incorrectPassword
  );

  it(
    "should return 422 when the email is invalid",
    signInControllerTest.invalidEmail
  );

  it(
    "should return 422 when the password is invalid",
    signInControllerTest.invalidPassword
  );
});

describe("GET /customers/:user", () => {
  it("returns 200 given valid token", listControllerTest.valid);
});

describe("DELETE /delete/:id", () => {
  it("returns 200 when delete is successful", listControllerTest.deleteContact);

  it("returns 500 given inexistent id", listControllerTest.wrongContactId);
});

describe("PUT /update/:id", () => {
  it("returns 500 given inexistent id", listControllerTest.wrongUpdateId);
});

describe("POST /create", () => {
  it("returns 201 when create new contact", listControllerTest.createUserList);
});

afterAll(() => deleteAll());
