import { z } from "zod"
import { Login, Register } from "./auth"

type ILogin = z.infer<typeof Login>

type IRegister = z.infer<typeof Register>

export type { ILogin, IRegister }
