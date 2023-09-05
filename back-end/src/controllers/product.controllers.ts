import { Request, Response } from "express"
import createProductService from "../services/products/createProduct.service"

const createProductController = async (req: Request, res: Response) => {
  const data = await createProductService(req.body, req.userAuthId)

  return res.status(200).json(data)
}

export { createProductController }
