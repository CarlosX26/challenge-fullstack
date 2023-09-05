import AppDataSource from "../../data-source"
import AppError from "../../error"
import { Product } from "../../entities/product.entity"

const deleteProductService = async (productId: string): Promise<void> => {
  const productRepo = AppDataSource.getRepository(Product)

  const product = await productRepo.findOneBy({ id: productId })

  if (!product) {
    throw new AppError("Product not found.", 404)
  }

  await productRepo.remove(product)
}

export default deleteProductService
