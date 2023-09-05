import { ILogin, IRegister } from "../validations/types"

interface IAuthContext {
  loginUser(loginData: ILogin): Promise<void>
  loginUserAdm(loginData: ILogin): Promise<void>
  registerUser(registerData: IRegister): Promise<void>
  registerUserAdm(registerData: IRegister): Promise<void>
  user: IUser | null
  loading: boolean
  logout(): void
}

interface IUser {
  name: string
  email: string
  isAdm: boolean
}

export type { IAuthContext, IUser }
