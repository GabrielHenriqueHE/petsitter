import { test, expect } from "vitest"
import { generateToken } from "./Token.provider"

test("test token generation", () => {
    const token = generateToken("6c4cb8dd-ec50-4b1d-9096-e4448e5e1de9")
    console.log(token)
})
