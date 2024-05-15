import PostgresRepository from "../../repositories/implementations/PostgresOwnersRepository";
import CreateOwnerController from "./CreateOwner.controller";
import CreateOwnerUseCase from "./CreateOwner.useCase";


const createOwnerUseCase = new CreateOwnerUseCase(new PostgresRepository())
const createOwnerController = new CreateOwnerController(createOwnerUseCase)

export {
    createOwnerController,
    createOwnerUseCase
}