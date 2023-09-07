import { z } from "zod"

const Product = z.object({
  name: z.string().nonempty("Campo vazio"),
  description: z.string().optional(),
  imgUrl: z.string().optional(),
  inventory: z
    .string()
    .nonempty("Campo vazio")
    .or(z.number())
    .transform((inventory) =>
      typeof inventory == "string" ? Number(inventory) : inventory
    ),
  price: z
    .string()
    .nonempty("Campo vazio")
    .or(z.number())
    .transform((price) => (typeof price == "string" ? Number(price) : price)),
})

export { Product }
