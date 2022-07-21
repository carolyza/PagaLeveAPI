import * as signInControllerTest from "./controllers/signInController.js";
import * as signUpControllerTest from "./controllers/signUpController.js";
import db from "../database.js";
import mongoClient from "../database.js";

beforeEach(deleteAll);

async function deleteAll() {
  await db.collection("list").deleteMany({});
  await db.collection("users").deleteMany({});
}

// afterAll(async () => {
//   await mongoClient.close();
// });

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

// function beforeEach(truncateAll: () => Promise<void>) {
//   throw new Error("Function not implemented.");
// }

// function afterAll(arg0: () => Promise<void>) {
//   throw new Error("Function not implemented.");
// }
