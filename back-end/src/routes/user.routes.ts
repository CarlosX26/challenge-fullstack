import { Router } from "express"
import { verifySchemaMiddleware } from "../middlewares/verifySchema.middleware"
import { User } from "../schemas/user"
import { createUserController } from "../controllers/user.controllers"

const userRouter = Router()

userRouter.post("", verifySchemaMiddleware(User), createUserController)

export default userRouter
