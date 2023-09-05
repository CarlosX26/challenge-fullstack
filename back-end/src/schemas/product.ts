import { z } from "zod"
import { UserReturn } from "./user"

const Product = z.object({
  name: z.string().nonempty().max(128),
  description: z
    .string()
    .max(128)
    .optional()
    .transform((description) => (Boolean(description) ? description : "")),
  imgUrl: z
    .string()
    .max(256)
    .optional()
    .transform((description) => (Boolean(description) ? description : "")),
  inventory: z.number().nonnegative().min(1),
  price: z.number().nonnegative(),
})

const ProductUpdate = Product.partial()

const ProductReturn = Product.extend({
  user: UserReturn,
})

export { Product, ProductReturn, ProductUpdate }
