import { Router } from "express"
import { verifyUserAuthMiddleware } from "../middlewares/verifyUserAuth.middleware"
import { verifySchemaMiddleware } from "../middlewares/verifySchema.middleware"
import { Cart } from "../schemas/cart"
import {
  addProductToCartController,
  deleteProductToCartController,
  readProductsCartController,
  updateProductToCartController,
} from "../controllers/cart.controllers"

const cartRouter = Router()

cartRouter.post(
  "/products/:id",
  verifyUserAuthMiddleware,
  verifySchemaMiddleware(Cart),
  addProductToCartController
)
cartRouter.patch(
  "/products/:id",
  verifyUserAuthMiddleware,
  verifySchemaMiddleware(Cart),
  updateProductToCartController
)
cartRouter.delete(
  "/products/:id",
  verifyUserAuthMiddleware,
  deleteProductToCartController
)
cartRouter.get("/view", verifyUserAuthMiddleware, readProductsCartController)

export default cartRouter
