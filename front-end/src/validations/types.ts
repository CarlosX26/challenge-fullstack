import { z } from "zod"
import { Login, Register } from "./auth"
import { Product } from "./product"

type ILogin = z.infer<typeof Login>

type IRegister = z.infer<typeof Register>

type IProduct = z.infer<typeof Product>

export type { ILogin, IRegister, IProduct }
