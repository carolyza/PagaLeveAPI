import dotenv from "dotenv";
import listRepository from "../repositories/listRepository.js";
import { notFoundError, } from "../utils/errorUtils.js";
dotenv.config();
async function getList(user) {
    const list = await listRepository.findById(user);
    if (!list)
        throw notFoundError("Contact list not found");
    return list;
}
async function updateList(id, userData) {
    const list = await listRepository.update(id, userData);
    if (!list || list.matchedCount === 0)
        throw notFoundError("Contact list not found");
    return list;
}
async function deleteContact(id) {
    const list = await listRepository.deleteContact(id);
    if (!list || list.deletedCount === 0)
        throw notFoundError("Contact not found");
    return list;
}
export default {
    getList,
    updateList,
    deleteContact,
};
//# sourceMappingURL=listService.js.map