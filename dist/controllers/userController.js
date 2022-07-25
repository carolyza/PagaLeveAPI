import userService from "../services/userService.js";
export async function signUp(req, res) {
    const user = req.body;
    await userService.signUp(user);
    res.sendStatus(201);
}
export async function signIn(req, res) {
    const user = req.body;
    const token = await userService.signIn(user);
    res.send({ token });
}
export async function getUserId(req, res) {
    const user = req.params.loginData;
    const contact = await userService.getUserId(user);
    res.send(contact);
}
//# sourceMappingURL=userController.js.map