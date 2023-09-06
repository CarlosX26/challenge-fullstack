import { z } from "zod"
import { Product, ProductReturn, ProductUpdate } from "../schemas/product"

type IProduct = z.infer<typeof Product>

type IProductUpdate = z.infer<typeof ProductUpdate>

type IProductReturn = z.infer<typeof ProductReturn>

export type { IProduct, IProductReturn, IProductUpdate }
