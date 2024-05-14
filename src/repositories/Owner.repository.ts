import { Owner as OwnerData } from "@prisma/client"
import Owner from "../entities/classes/Owner"

export default interface OwnersRepository {
    save(data: Owner): Promise<void>
    findOne(id: string): Promise<OwnerData | null>
}