import listService from "../services/listService.js";
export async function getList(req, res) {
    const user = req.params;
    const list = await listService.getList(user);
    res.send(list);
}
export async function updateList(req, res) {
    const userData = req.body;
    const id = req.params.id;
    const list = await listService.updateList(id, userData);
    res.send(list);
}
export async function deleteContact(req, res) {
    const id = req.params;
    const list = await listService.deleteContact(id);
    res.send(list);
}
//# sourceMappingURL=listController.js.map