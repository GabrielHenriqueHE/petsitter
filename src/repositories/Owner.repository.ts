import Owner from "../entities/classes/Owner"

export default interface OwnersRepository {
    save(data: Omit<Owner, "id">): Promise<Owner>
    findOne(email: string): Promise<Owner | null>
}