import bcrypt from "bcrypt";
import { faker } from "@faker-js/faker";
import userRepository from "../../repositories/userRepository.js";
export async function createUser(user) {
    const hashedPassword = bcrypt.hashSync(user.password, 12);
    const insertedUser = await userRepository.insert({
        ...user,
        password: hashedPassword,
    });
    return insertedUser;
}
export function formatBodyCreateUser() {
    return {
        email: faker.internet.email(),
        password: faker.internet.password(),
    };
}
//# sourceMappingURL=userFactory.js.map