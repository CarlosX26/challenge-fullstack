import { Router } from "express"
import { verifySchemaMiddleware } from "../middlewares/verifySchema.middleware"
import { User, UserAuth, UserUpdate } from "../schemas/user"
import {
  authUserController,
  createUserAdmController,
  createUserController,
  updateUserController,
} from "../controllers/user.controllers"
import { verifyUserAuthMiddleware } from "../middlewares/verifyUserAuth.middleware"

const userRouter = Router()

userRouter.post("/auth", verifySchemaMiddleware(UserAuth), authUserController)
userRouter.post("", verifySchemaMiddleware(User), createUserController)
userRouter.post("/admin", verifySchemaMiddleware(User), createUserAdmController)
userRouter.patch(
  "/profile",
  verifyUserAuthMiddleware,
  verifySchemaMiddleware(UserUpdate),
  updateUserController
)

export default userRouter
