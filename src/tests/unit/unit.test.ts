import { jest } from "@jest/globals";
import { ObjectId } from "mongodb";
import { mongoClient } from "../../database.js";
import userRepository from "../../repositories/userRepository.js";
import listRepository from "../../repositories/listRepository.js";
import userService from "../../services/userService.js";
import listService from "../../services/listService.js";
import { createUserList } from "../factories/listFactory.js";
import { list } from "../mock/contactMock.js";
import bcrypt from "bcrypt";
import { CreateUserData } from "../../services/userService.js";
import { users } from "../mock/userMock.js";
import { generateId } from "../factories/tokenFactory.js";
import { notFoundError } from "../../utils/errorUtils.js";

describe("contact service unit test", () => {
  afterAll(() => {
    mongoClient.close();
  });
  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("should return not found given invalid id on delete", async () => {
    const _id = generateId();

    const userList = createUserList(list);

    jest
      .spyOn(listRepository, "deleteContact")
      .mockResolvedValue({ acknowledged: true, deletedCount: 0 });

    expect(async () => {
      await listService.deleteContact({ user: { _id } });
    }).rejects.toEqual({
      message: "Contact not found",
      type: "not_found",
    });
  });

  it("should return not found given invalid id on update", async () => {
    const _id = generateId();
    const strgId = _id.toString();

    const userList = createUserList(list);

    jest.spyOn(listRepository, "update").mockResolvedValue({
      acknowledged: true,
      modifiedCount: 0,
      upsertedId: _id,
      upsertedCount: 0,
      matchedCount: 1,
    });

    expect(async () => {
      await listService.updateList(strgId, list);
    }).rejects.toEqual({
      message: "Contact list not found",
      type: "not_found",
    });
  });
});
