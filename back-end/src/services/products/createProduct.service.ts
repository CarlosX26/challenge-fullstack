import AppDataSource from "../../data-source"
import AppError from "../../error"
import { Product } from "../../entities/product.entity"
import { User } from "../../entities/user.entity"
import { IProduct, IProductReturn } from "../../interfaces/product"
import { ProductReturn } from "../../schemas/product"

const createProductService = async (
  payload: IProduct,
  userId: string
): Promise<IProductReturn> => {
  const userRepo = AppDataSource.getRepository(User)
  const productRepo = AppDataSource.getRepository(Product)

  const user = await userRepo.findOneBy({ id: userId })

  const product = await productRepo.findOneBy({ name: payload.name })

  if (product) {
    throw new AppError("Product already exists.")
  }

  const newProduct = productRepo.create({ ...payload, user: user! })

  await productRepo.save(newProduct)

  return ProductReturn.parse(newProduct)
}

export default createProductService
