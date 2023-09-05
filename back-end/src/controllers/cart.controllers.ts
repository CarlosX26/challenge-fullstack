import { Request, Response } from "express"
import addProductToCartService from "../services/carts/addProductToCart.service"

const addProductToCartController = async (req: Request, res: Response) => {
  const data = await addProductToCartService(
    req.body,
    req.params.id,
    req.userAuthId
  )

  return res.status(200).json(data)
}

export { addProductToCartController }
