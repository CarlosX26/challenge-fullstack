import { z } from "zod"
import { Login } from "./auth"

type ILogin = z.infer<typeof Login>

export type { ILogin }
