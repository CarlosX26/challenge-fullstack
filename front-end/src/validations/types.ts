import { z } from "zod"
import { Login, Register } from "./auth"
import { Product } from "./product"

type ILogin = z.infer<typeof Login>

type IRegister = z.infer<typeof Register>

type IProductForm = z.infer<typeof Product>

export type { ILogin, IRegister, IProductForm }
