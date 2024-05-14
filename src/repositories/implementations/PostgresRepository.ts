import { Owner as OwnerData, PrismaClient } from "@prisma/client";
import OwnersRepository from "../Owner.repository";
import Owner from "../../entities/classes/Owner";

export default class PostgresRepository implements OwnersRepository {
    constructor (
        public prismaClient: PrismaClient
    ) {}
    
    async save(data: Owner): Promise<void> {
        await this.prismaClient.owner.create({ data })
    }
    
    async findOne(id: string): Promise<OwnerData | null> {
        return await this.prismaClient.owner.findUnique({ where: { id } })
    }
}