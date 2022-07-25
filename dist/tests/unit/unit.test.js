import { jest } from "@jest/globals";
import { mongoClient } from "../../database.js";
import listService from "../../services/listService.js";
import { createUserList } from "../factories/listFactory.js";
import { list } from "../mock/contactMock.js";
import { generateId } from "../factories/tokenFactory.js";
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
        expect(async () => {
            await listService.deleteContact({ user: { _id } });
        }).rejects.toEqual({
            message: "Contact not found",
            type: "not_found",
        });
    });
    it("should return not found given invalid id on update", async () => {
        const _id = generateId().toString();
        const userList = createUserList(list);
        expect(async () => {
            await listService.updateList(_id, list);
        }).rejects.toEqual({
            message: "Contact list not found",
            type: "not_found",
        });
    });
});
describe("user service unit test", () => {
    //   afterAll(() => {
    //     mongoClient.close();
    //   });
    //   afterEach(() => {
    //     jest.restoreAllMocks();
    //   });
    //   it("Should create a user ", async () => {
    //     const _id = new ObjectId("123");
    //     const mockFn = jest.spyOn(userRepository, "insert").mockResolvedValueOnce({
    //       _id: _id,
    //       email: "brother_of_jorel@mail.com",
    //       password: "vovojujulinda",
    //     });
    //     expect(mockFn).toBeCalled();
    //     const result = await userService.signUp({
    //       _id: _id,
    //       email: "brother_of_jorel@mail.com",
    //       password: "vovojujulinda",
    //     });
    //     expect(result).toEqual(201);
    //   });
    // it('Should not create a user without hased password', async () => {
    //     jest.spyOn(bcrypt, 'hashSync').mockImplementationOnce(() => {
    //         return false
    //     })
    //   const result = await userService.createUser({
    //         name: 'Irmao do Jorel',
    //         email: 'brother_of_jorel@mail.com'
    //     })
    //   expect(result).toEqual(false);
    // })
});
//# sourceMappingURL=unit.test.js.map