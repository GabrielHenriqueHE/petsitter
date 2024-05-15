import Owner from "../../entities/classes/Owner";
import OwnersRepository from "../../repositories/Owner.repository";
import { ICreateOwnerDTO } from "./CreateOwnerDTO";
import { hashSync } from "bcrypt";

export default class CreateOwnerUseCase {

    constructor (
        public OwnersRepository: OwnersRepository
    ) {}
    
    async execute({ email, password }: ICreateOwnerDTO): Promise<Owner> {
        const ownerAlreadyExists = await this.OwnersRepository.findOne(email)

        if (ownerAlreadyExists) throw new Error("Owner already exists")

        const encryptedPassword = hashSync(password, 10)
        
        return await this.OwnersRepository.save({ email, password: encryptedPassword })
    }
}