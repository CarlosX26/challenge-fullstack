import { z } from "zod"
import { User, UserReturn } from "../schemas/user"

type IUser = z.infer<typeof User>

type IUserReturn = z.infer<typeof UserReturn>

export type { IUser, IUserReturn }
