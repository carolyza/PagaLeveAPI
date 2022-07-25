import createService from "../services/createService.js";
export async function insertContact(req, res) {
    const data = req.body;
    await createService.insert(data);
    res.sendStatus(201);
}
//# sourceMappingURL=createController.js.map