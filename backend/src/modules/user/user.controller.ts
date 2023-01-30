import { Request, Response } from "express";
import { UserService } from "./user.service";

const userService: UserService = new UserService();
class UserController {
    async get(req: Request, res: Response) {
        return res.json({ message: "hello auth" });
    }

    async post(req: Request, res: Response) {
        const { email, password } = req.body;
        try {
            const isUserExist = await userService.findUserByEmail(email);
            if (isUserExist) {
                return res.status(400).json({
                    message: "user with email exits",
                });
            }
        } catch (error) {
            console.log(error);
            return res.status(500).json({ messae: "internal server error" });
        }
    }
}

export default new UserController();
