import AppDataSource from "../../data-source"
import { Cart } from "../../entities/cart.entity"

const readProductsCartService = async (
  userId: string
): Promise<Cart | null> => {
  const cartRepo = AppDataSource.getRepository(Cart)

  const cart = await cartRepo.findOne({
    where: {
      user: {
        id: userId,
      },
      status: "PENDING",
    },
    relations: {
      productCart: {
        product: true,
      },
    },
  })

  return cart
}

export default readProductsCartService
