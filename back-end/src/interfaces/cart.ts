import { z } from "zod"
import { Cart } from "../schemas/cart"

type ICart = z.infer<typeof Cart>

export type { ICart }
