import supertest from "supertest";
import app from "../../app.js";
import { getIds } from "../factories/listFactory.js";
import tokenFactory from "../factories/tokenFactory.js";
import * as listFactory from "../factories/listFactory.js";
import { list } from "../mock/contactMock.js";

export async function valid() {
  const user = await getIds();

  const login = await tokenFactory();

  const promise = await supertest(app)
    .get(`/customers/${user}`)
    .set("Authorization", login.body.token.token);

  expect(promise.status).toEqual(200);
}

export async function deleteContact() {
  const userInfo = listFactory.formatBodyCreateContact();
  const user = await listFactory.createUserList(userInfo);
  const id = await listFactory.getCustomerId(userInfo.phone);
  const contactId = id.toString();

  const promise = await supertest(app).delete(`/delete/${contactId}`);
  expect(promise.status).toEqual(200);
}

export async function wrongContactId() {
  const userInfo = listFactory.formatBodyCreateContact();
  const user = await listFactory.createUserList(userInfo);
  const phone = "1231231231232132";

  const promise = await supertest(app).delete(`/delete/${phone}`);
  expect(promise.status).toEqual(500);
}

export async function updateContact() {
  const userInfo = listFactory.formatBodyCreateContact();
  const user = await listFactory.createUserList(userInfo);
  const id = await listFactory.getCustomerId(userInfo.phone);
  console.log(list);

  const contactId = id.toString();

  const promise = await supertest(app).put(`/update/${id}`).send(list);
  expect(promise.status).toEqual(200);
}

export async function wrongUpdateId() {
  const userInfo = listFactory.formatBodyCreateContact();
  const user = await listFactory.createUserList(userInfo);
  const id = await listFactory.getCustomerId(userInfo.phone);
  const contactId = "36217836128736";
  const newInfo = list;

  const promise = await supertest(app).put(`/update/${contactId}`).send(list);
  expect(promise.status).toEqual(500);
}

export async function createUserList() {
  const newUserList = list;
  const promise = await supertest(app).post("/create").send(newUserList);
  expect(promise.status).toEqual(201);
}
