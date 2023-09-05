import { Request, Response } from "express"
import createProductService from "../services/products/createProduct.service"
import readProductsService from "../services/products/readProducts.service"

const createProductController = async (req: Request, res: Response) => {
  const data = await createProductService(req.body, req.userAuthId)

  return res.status(201).json(data)
}

const readProductsController = async (req: Request, res: Response) => {
  const data = await readProductsService()

  return res.status(200).json(data)
}

export { createProductController, readProductsController }
