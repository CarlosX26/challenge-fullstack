import AppDataSource from "../../data-source"
import AppError from "../../error"
import { Product } from "../../entities/product.entity"
import { ProductCart } from "../../entities/productCart.entity"
import { ICart } from "../../interfaces/cart"

const updateProductToCartService = async (
  { amount }: ICart,
  productId: string,
  userId: string
): Promise<{ message: string }> => {
  const productCartRepo = AppDataSource.getRepository(ProductCart)
  const productRepo = AppDataSource.getRepository(Product)

  const product = await productRepo.findOneBy({
    id: productId,
  })

  if (!product) {
    throw new AppError("Product not found.", 404)
  }

  const productInCart = await productCartRepo.findOne({
    where: {
      cart: {
        status: "PENDING",
        user: {
          id: userId,
        },
      },
      product: {
        id: productId,
      },
    },
  })

  if (!productInCart) {
    throw new AppError("Product not found.", 404)
  }

  await productCartRepo.save({ ...productInCart, amount })

  return { message: "Product successfully updated." }
}

export default updateProductToCartService
