import { z } from "zod"
import { User, UserAdm, UserReturn } from "../schemas/user"

type IUser = z.infer<typeof User>

type IUserAdm = z.infer<typeof UserAdm>

type IUserReturn = z.infer<typeof UserReturn>

export type { IUser, IUserReturn, IUserAdm }
