import { Request, Response } from "express"
import CreateOwnerUseCase from "./CreateOwner.useCase";

export default class CreateOwnerController {

    constructor (
        private createOwnerUseCase: CreateOwnerUseCase
    ) {}

    async handle(req: Request, res: Response): Promise<Response | void> {
        const { email, password } = req.body

        try {
            const owner = await this.createOwnerUseCase.execute({ email, password })
            const id = owner.id
            
            return res.status(307).redirect(307, `/auth?user=${id}`)
        } catch (error) {
            return res.status(400).json({
                error: "User already exists" 
            })
        }
    }
}
