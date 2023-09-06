import { z } from "zod"
import { ProductReturn } from "./product"

const Cart = z.object({
  amount: z.number().nonnegative(),
})

const CartReturn = z.object({
  id: z.string(),
  amount: z.number(),
  product: ProductReturn.omit({ user: true }),
})

export { Cart, CartReturn }
