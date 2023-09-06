import { z } from "zod"

const Product = z.object({
  name: z.string().nonempty("Campo vazio"),
  description: z.string().optional(),
  imgUrl: z.string().optional(),
  inventory: z
    .string()
    .nonempty("Campo vazio")
    .transform((inventory) => Number(inventory)),
  price: z
    .string()
    .nonempty("Campo vazio")
    .transform((price) => Number(price)),
})

export { Product }
