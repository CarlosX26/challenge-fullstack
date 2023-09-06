import AppDataSource from "../../data-source"
import { Product } from "../../entities/product.entity"

const readProductsAdmService = async (userId: string): Promise<Product[]> => {
  const productRepo = AppDataSource.getRepository(Product)

  const products = await productRepo.find({
    where: {
      user: {
        id: userId,
      },
    },
  })

  return products
}

export default readProductsAdmService
