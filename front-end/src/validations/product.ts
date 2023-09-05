import { z } from "zod"

const Product = z.object({
  name: z.string().nonempty(),
  description: z.string().optional(),
  img_url: z.string().optional(),
  inventory: z.string().transform((inventory) => Number(inventory)),
  price: z.string().transform((price) => Number(price)),
})

export { Product }
