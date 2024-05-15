import { PrismaClient } from "@prisma/client";

import OwnersRepository from "../Owner.repository";
import Owner from "../../entities/classes/Owner";

export default class PostgresRepository implements OwnersRepository {
    constructor (
        public prismaClient: PrismaClient = new PrismaClient()
    ) {}
    
    async save(data: Omit<Owner, "id">): Promise<Owner> {
        const { email, password } = data 
        const owner = new Owner(email, password)
        return await this.prismaClient.owner.create({
            data: owner
        })
    }
    
    async findOne(email: string): Promise<Owner | null> {
        return await this.prismaClient.owner.findUnique({ where: { email } })
    }
}
