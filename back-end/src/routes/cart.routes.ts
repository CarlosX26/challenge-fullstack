import { Router } from "express"
import { verifyUserAuthMiddleware } from "../middlewares/verifyUserAuth.middleware"
import { verifySchemaMiddleware } from "../middlewares/verifySchema.middleware"
import { Cart } from "../schemas/cart"
import { addProductToCartController } from "../controllers/cart.controllers"

const cartRouter = Router()

cartRouter.post(
  "/products/:id",
  verifyUserAuthMiddleware,
  verifySchemaMiddleware(Cart),
  addProductToCartController
)

export default cartRouter
