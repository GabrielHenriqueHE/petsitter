import AuthenticateUserController from "./AuthenticateUser.controller";
import AuthenticateUserUseCase from "./AuthenticateUser.useCase";


const authenticateUserUseCase = new AuthenticateUserUseCase()
const authenticateUserController = new AuthenticateUserController(authenticateUserUseCase)

export {
    authenticateUserController    
}