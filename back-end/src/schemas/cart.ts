import { z } from "zod"

const Cart = z.object({
  amount: z.number().nonnegative(),
})

export { Cart }
