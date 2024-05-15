import { generateToken } from "../../provider/Token.provider";

export default class AuthenticateUserUseCase {

    execute(data: string): string | void{
        return generateToken(data)
    }
}
