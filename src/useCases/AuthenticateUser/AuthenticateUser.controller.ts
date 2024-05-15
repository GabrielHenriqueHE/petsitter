import { Request, Response } from "express";
import AuthenticateUserUseCase from "./AuthenticateUser.useCase";

export default class AuthenticateUserController {
    constructor (
        private authenticateUserUseCase: AuthenticateUserUseCase
    ) {}

    handle (req: Request, res: Response) {

        if (typeof req.query.user === "string") {
            const token = this.authenticateUserUseCase.execute(String(req.query.user))
            console.log(token)

            return res.status(200).json({
                token: token
            })
        }
       
    }
}
