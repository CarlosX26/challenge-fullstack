import { z } from "zod"
import { UserReturn } from "./user"

const Product = z.object({
  name: z.string().nonempty().max(128),
  description: z.string().max(128).optional(),
  img_url: z.string().max(256).optional(),
  inventory: z.number().nonnegative().min(1),
  price: z.number().nonnegative(),
})

const ProductReturn = Product.extend({
  user: UserReturn,
})

export { Product, ProductReturn }
