import AppDataSource from "../../data-source"
import { Product } from "../../entities/product.entity"

const readProductsService = async (): Promise<Product[]> => {
  const productRepo = AppDataSource.getRepository(Product)

  const products = await productRepo.find()

  return products
}

export default readProductsService
