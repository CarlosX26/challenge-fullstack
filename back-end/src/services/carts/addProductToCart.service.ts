import AppDataSource from "../../data-source"
import AppError from "../../error"
import { Cart } from "../../entities/cart.entity"
import { Product } from "../../entities/product.entity"
import { ProductCart } from "../../entities/productCart.entity"
import { User } from "../../entities/user.entity"
import { ICart } from "../../interfaces/cart"

const addProductToCartService = async (
  { amount }: ICart,
  productId: string,
  userId: string
): Promise<{ message: string }> => {
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
    cart = cartRepo.create({ user: user! })

    await cartRepo.save(cart)
  }

  await productCartRepo.save({
    amount,
    cart,
    product,
  })

  return { message: "Product successfully added." }
}

export default addProductToCartService
