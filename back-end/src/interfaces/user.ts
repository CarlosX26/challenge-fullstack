import { z } from "zod"
import { User, UserAuth, UserReturn, UserUpdate } from "../schemas/user"

type IUser = z.infer<typeof User>

type IUserUpdate = z.infer<typeof UserUpdate>

type IUserAuth = z.infer<typeof UserAuth>

type IUserReturn = z.infer<typeof UserReturn>

export type { IUser, IUserReturn, IUserAuth, IUserUpdate }
