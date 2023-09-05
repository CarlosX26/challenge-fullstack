import { Router } from "express"
import { verifySchemaMiddleware } from "../middlewares/verifySchema.middleware"
import { User, UserAuth, UserUpdate } from "../schemas/user"
import {
  authUserController,
  createUserAdmController,
  createUserController,
  deleteUserController,
  updateUserController,
} from "../controllers/user.controllers"
import { verifyUserAuthMiddleware } from "../middlewares/verifyUserAuth.middleware"
import { verifyEmailMiddleware } from "../middlewares/verifyEmail.middleware"

const userRouter = Router()

userRouter.post("/auth", verifySchemaMiddleware(UserAuth), authUserController)
userRouter.post(
  "",
  verifySchemaMiddleware(User),
  verifyEmailMiddleware,
  createUserController
)
userRouter.post(
  "/admin",
  verifySchemaMiddleware(User),
  verifyEmailMiddleware,
  createUserAdmController
)
userRouter.patch(
  "/profile",
  verifyUserAuthMiddleware,
  verifySchemaMiddleware(UserUpdate),
  updateUserController
)
userRouter.delete("/profile", verifyUserAuthMiddleware, deleteUserController)

export default userRouter
