import { Request, Response } from "express"
import addProductToCartService from "../services/carts/addProductToCart.service"
import readProductsCartService from "../services/carts/readProductsCart.service"

const addProductToCartController = async (req: Request, res: Response) => {
  const data = await addProductToCartService(
    req.body,
    req.params.id,
    req.userAuthId
  )

  return res.status(200).json(data)
}

const readProductsCartController = async (req: Request, res: Response) => {
  const data = await readProductsCartService(req.userAuthId)

  return res.status(200).json(data)
}

export { addProductToCartController, readProductsCartController }
