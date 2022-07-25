import db from "../../database.js";
import { faker } from "@faker-js/faker";
import createRepository from "../../repositories/createRepository.js";
import { list } from "../mock/contactMock";
export function formatBodyCreateId(id) {
    return {
        userId: id,
    };
}
export async function getIds() {
    const id = `P${faker.datatype.number(6)}`;
    await db.collection("list").updateOne({
        userId: id,
    }, {
        $set: {
            userId: id,
        },
    }, { upsert: true });
    return id;
}
export async function getCustomerId(phone) {
    const user = await db.collection("list").findOne({
        phone: phone,
    });
    console.log(user._id);
    return user._id;
}
export async function createUserList(list) {
    const insertedUser = await createRepository.insert({
        ...list,
    });
    return insertedUser;
}
export function formatBodyCreateContact() {
    return {
        ...list,
    };
}
export async function deleteContact() { }
//# sourceMappingURL=listFactory.js.map