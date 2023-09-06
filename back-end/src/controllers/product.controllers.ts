import { Request, Response } from "express"
import createProductService from "../services/products/createProduct.service"
import readProductsService from "../services/products/readProducts.service"
import updateProductService from "../services/products/updateProduct.service"
import deleteProductService from "../services/products/deleteProduct.service"
import readProductsAdmService from "../services/products/readProductsAdm.service"

const createProductController = async (req: Request, res: Response) => {
  const data = await createProductService(req.body, req.userAuthId)

  return res.status(201).json(data)
}

const readProductsController = async (req: Request, res: Response) => {
  const data = await readProductsService()

  return res.status(200).json(data)
}

const readProductsAdmController = async (req: Request, res: Response) => {
  const data = await readProductsAdmService(req.userAuthId)

  return res.status(200).json(data)
}

const updateProductController = async (req: Request, res: Response) => {
  const data = await updateProductService(req.body, req.params.id)

  return res.status(200).json(data)
}

const deleteProductController = async (req: Request, res: Response) => {
  const data = await deleteProductService(req.params.id)

  return res.status(204).json(data)
}

export {
  createProductController,
  readProductsController,
  readProductsAdmController,
  updateProductController,
  deleteProductController,
}
