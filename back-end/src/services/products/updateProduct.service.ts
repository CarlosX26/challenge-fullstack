import AppDataSource from "../../data-source"
import AppError from "../../error"
import { Product } from "../../entities/product.entity"
import { IProductReturn, IProductUpdate } from "../../interfaces/product"
import { ProductReturn } from "../../schemas/product"

const updateProductService = async (
  payload: IProductUpdate,
  productId: string
): Promise<IProductReturn> => {
  const productRepo = AppDataSource.getRepository(Product)

  const product = await productRepo.findOneBy({ id: productId })

  if (!product) {
    throw new AppError("Product not found.", 404)
  }

  const productUpdated = await productRepo.save({ ...product, ...payload })

  return ProductReturn.parse(productUpdated)
}

export default updateProductService
