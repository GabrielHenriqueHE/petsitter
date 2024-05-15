import { Router } from "express";
import { createOwnerController } from "../useCases/CreateOwner";
import { authenticateUserController } from "../useCases/AuthenticateUser";

const router = Router()

router.post("/owner", (req, res) => {
    try {
        return createOwnerController.handle(req, res)
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }  
})

router.post("/auth", (req, res) => {
    try {
        return authenticateUserController.handle(req, res)
    } catch (error) {
        return res.status(500).json({
            error: error
        })
    }
})

export default router;