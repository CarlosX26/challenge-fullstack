import { Router } from "express"
import { verifyUserAuthMiddleware } from "../middlewares/verifyUserAuth.middleware"
import { verifyUserIsAdmMiddleware } from "../middlewares/verifyUserIsAdm.middleware"
import { verifySchemaMiddleware } from "../middlewares/verifySchema.middleware"
import { Product } from "../schemas/product"
import { createProductController } from "../controllers/product.controllers"

const productRouter = Router()

productRouter.post(
  "",
  verifyUserAuthMiddleware,
  verifyUserIsAdmMiddleware,
  verifySchemaMiddleware(Product),
  createProductController
)

export default productRouter
