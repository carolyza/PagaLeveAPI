import dotenv from "dotenv";
import createRepository from "../repositories/createRepository.js";
dotenv.config();
async function insert(data) {
    const contact = await createRepository.insert({ ...data });
    return contact;
}
export default {
    insert,
};
//# sourceMappingURL=createService.js.map