import { z } from "zod"
import { Cart, CartReturn } from "../schemas/cart"

type ICart = z.infer<typeof Cart>

type ICartReturn = z.infer<typeof CartReturn>

export type { ICart, ICartReturn }
