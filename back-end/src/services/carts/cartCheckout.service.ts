import AppDataSource from "../../data-source"
import { Cart } from "../../entities/cart.entity"

const cartCheckoutService = async (userId: string): Promise<Cart> => {
  const cartRepo = AppDataSource.getRepository(Cart)

  const cart = await cartRepo.findOne({
    where: {
      status: "PENDING",
      user: {
        id: userId,
      },
    },
    relations: {
      productCart: {
        product: true,
      },
    },
  })

  const completedCart = await cartRepo.save({ ...cart, status: "FINISHED" })

  return completedCart
}

export default cartCheckoutService
