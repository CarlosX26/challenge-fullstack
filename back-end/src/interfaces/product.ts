import { z } from "zod"
import { Product, ProductReturn } from "../schemas/product"

type IProduct = z.infer<typeof Product>

type IProductReturn = z.infer<typeof ProductReturn>

export type { IProduct, IProductReturn }
