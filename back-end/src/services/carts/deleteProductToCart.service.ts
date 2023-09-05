import AppDataSource from "../../data-source"
import { ProductCart } from "../../entities/productCart.entity"
import AppError from "../../error"

const deleteProductToCartService = async (
  productId: string,
  userId: string
): Promise<void> => {
  const productCartRepo = AppDataSource.getRepository(ProductCart)

  const productCart = await productCartRepo.findOne({
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

  if (!productCart) {
    throw new AppError("Product not found.", 404)
  }

  await productCartRepo.remove(productCart)
}

export default deleteProductToCartService
