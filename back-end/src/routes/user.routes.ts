import { Router } from "express"
import { verifySchemaMiddleware } from "../middlewares/verifySchema.middleware"
import { User } from "../schemas/user"
import {
  createUserAdmController,
  createUserController,
} from "../controllers/user.controllers"

const userRouter = Router()

userRouter.post("", verifySchemaMiddleware(User), createUserController)
userRouter.post("/admin", verifySchemaMiddleware(User), createUserAdmController)

export default userRouter
