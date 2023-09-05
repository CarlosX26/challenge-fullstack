import { Router } from "express"
import { verifySchemaMiddleware } from "../middlewares/verifySchema.middleware"
import { User, UserAuth } from "../schemas/user"
import {
  authUserController,
  createUserAdmController,
  createUserController,
} from "../controllers/user.controllers"

const userRouter = Router()

userRouter.post("/auth", verifySchemaMiddleware(UserAuth), authUserController)
userRouter.post("", verifySchemaMiddleware(User), createUserController)
userRouter.post("/admin", verifySchemaMiddleware(User), createUserAdmController)

export default userRouter
