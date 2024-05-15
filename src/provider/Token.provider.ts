import "dotenv/config"

import { sign  } from "jsonwebtoken" 

export function generateToken(data: string): string | void  {
    console.log(process.env.SECRET)
    
    try {
        return sign({ data }, String(process.env.SECRET), {
            expiresIn: "8h"
        })
    } catch (error) {
        throw new Error("Error during token generation")
    }
}
