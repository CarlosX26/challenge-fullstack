import AppDataSource from "../../data-source"
import AppError from "../../error"
import { Product } from "../../entities/product.entity"
import { IProductUpdate } from "../../interfaces/product"

const updateProductService = async (
  payload: IProductUpdate,
  productId: string
): Promise<Product> => {
  const productRepo = AppDataSource.getRepository(Product)

  const product = await productRepo.findOneBy({ id: productId })

  if (!product) {
    throw new AppError("Product not found.", 404)
  }

  const productUpdated = await productRepo.save({ ...product, ...payload })

  return productUpdated
}

export default updateProductService
