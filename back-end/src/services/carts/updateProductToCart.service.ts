import AppDataSource from "../../data-source"
import AppError from "../../error"
import { Product } from "../../entities/product.entity"
import { ProductCart } from "../../entities/productCart.entity"
import { ICart, ICartReturn } from "../../interfaces/cart"
import { CartReturn } from "../../schemas/cart"

const updateProductToCartService = async (
  { amount }: ICart,
  productId: string,
  userId: string
): Promise<ICartReturn> => {
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
    relations: {
      product: true,
    },
  })

  if (!productInCart) {
    throw new AppError("Product not found.", 404)
  }

  const cartItem = await productCartRepo.save({ ...productInCart, amount })

  return CartReturn.parse(cartItem)
}

export default updateProductToCartService
