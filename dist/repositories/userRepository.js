import db from "../database.js";
async function findById(id) {
    const users = db.collection("users");
    return users.findOne({ id });
}
async function findByEmail(email) {
    const users = db.collection("users");
    return users.findOne({ email });
}
async function insert(createUserData) {
    const users = db.collection("users");
    return users.insertOne({ ...createUserData });
}
export default {
    findByEmail,
    findById,
    insert,
};
//# sourceMappingURL=userRepository.js.map