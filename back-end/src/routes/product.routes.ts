import { Router } from "express"
import { verifyUserAuthMiddleware } from "../middlewares/verifyUserAuth.middleware"
import { verifyUserIsAdmMiddleware } from "../middlewares/verifyUserIsAdm.middleware"
import { verifySchemaMiddleware } from "../middlewares/verifySchema.middleware"
import { Product, ProductUpdate } from "../schemas/product"
import {
  createProductController,
  deleteProductController,
  readProductsAdmController,
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
/**
 * @swagger
 * /products:
 *   get:
 *     summary: get all products.
 *     responses:
 *       '200':
 *         description: Sucesso. Return list of products.
 */
productRouter.get("", readProductsController)
productRouter.get(
  "/admin",
  verifyUserAuthMiddleware,
  verifyUserIsAdmMiddleware,
  readProductsAdmController
)
productRouter.patch(
  "/:id",
  verifyUserAuthMiddleware,
  verifyUserIsAdmMiddleware,
  verifySchemaMiddleware(ProductUpdate),
  updateProductController
)
productRouter.delete(
  "/:id",
  verifyUserAuthMiddleware,
  verifyUserIsAdmMiddleware,
  deleteProductController
)

export default productRouter
