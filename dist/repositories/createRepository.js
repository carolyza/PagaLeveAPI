import db from "../database.js";
export async function insert(data) {
    const list = db.collection("list");
    return list.insertOne({ ...data });
}
export default {
    insert,
};
//# sourceMappingURL=createRepository.js.map