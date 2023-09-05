import { Router } from "express"
import { verifyUserAuthMiddleware } from "../middlewares/verifyUserAuth.middleware"
import { verifyUserIsAdmMiddleware } from "../middlewares/verifyUserIsAdm.middleware"
import { verifySchemaMiddleware } from "../middlewares/verifySchema.middleware"
import { Product, ProductUpdate } from "../schemas/product"
import {
  createProductController,
  readProductsController,
  updateProductController,
} from "../controllers/product.controllers"

const productRouter = Router()

productRouter.post(
  "",
  verifyUserAuthMiddleware,
  verifyUserIsAdmMiddleware,
  verifySchemaMiddleware(Product),
  createProductController
)
productRouter.get("", readProductsController)
productRouter.patch(
  "/:id",
  verifyUserAuthMiddleware,
  verifyUserIsAdmMiddleware,
  verifySchemaMiddleware(ProductUpdate),
  updateProductController
)

export default productRouter
