import { Request, Response } from "express"
import addProductToCartService from "../services/carts/addProductToCart.service"
import readProductsCartService from "../services/carts/readProductsCart.service"
import updateProductToCartService from "../services/carts/updateProductToCart.service"
import deleteProductToCartService from "../services/carts/deleteProductToCart.service"

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

const updateProductToCartController = async (req: Request, res: Response) => {
  const data = await updateProductToCartService(
    req.body,
    req.params.id,
    req.userAuthId
  )

  return res.status(200).json(data)
}

const deleteProductToCartController = async (req: Request, res: Response) => {
  const data = await deleteProductToCartService(req.params.id, req.userAuthId)

  return res.status(204).json(data)
}

export {
  addProductToCartController,
  readProductsCartController,
  updateProductToCartController,
  deleteProductToCartController,
}
