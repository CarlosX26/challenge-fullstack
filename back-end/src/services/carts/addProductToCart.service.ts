import AppDataSource from "../../data-source"
import AppError from "../../error"
import { Cart } from "../../entities/cart.entity"
import { Product } from "../../entities/product.entity"
import { ProductCart } from "../../entities/productCart.entity"
import { User } from "../../entities/user.entity"
import { ICart, ICartReturn } from "../../interfaces/cart"
import { CartReturn } from "../../schemas/cart"

const addProductToCartService = async (
  { amount }: ICart,
  productId: string,
  userId: string
): Promise<ICartReturn> => {
  const cartRepo = AppDataSource.getRepository(Cart)
  const productCartRepo = AppDataSource.getRepository(ProductCart)
  const productRepo = AppDataSource.getRepository(Product)
  const userRepo = AppDataSource.getRepository(User)

  const product = await productRepo.findOneBy({
    id: productId,
  })

  if (!product) {
    throw new AppError("Product not found.", 404)
  }

  const productInCart = await cartRepo.findOne({
    where: {
      status: "PENDING",
      user: {
        id: userId,
      },
      productCart: {
        product: {
          id: productId,
        },
      },
    },
  })

  if (productInCart) {
    throw new AppError("Product is already in the cart.")
  }

  const user = await userRepo.findOneBy({ id: userId })

  let cart = await cartRepo.findOne({
    where: {
      status: "PENDING",
      user: { id: userId },
    },
  })

  if (!cart) {
    cart = cartRepo.create({ status: "PENDING", user: user! })

    await cartRepo.save(cart)
  }

  const cartItem = await productCartRepo.save({
    amount,
    cart,
    product,
  })

  return CartReturn.parse(cartItem)
}

export default addProductToCartService
