import { createContext, useContext } from "react"
import { IAuthContext } from "./types"
import { ILogin, IRegister } from "../validations/types"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import api from "../utils/axios"

const AuthContext = createContext({} as IAuthContext)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const navigate = useNavigate()

  const loginUser = async (loginData: ILogin) => {
    try {
      const { data } = await api.post("/users/auth", loginData)
      localStorage.setItem("@BESTSHOP:TOKEN", data.token)
      navigate("/", { replace: true })
    } catch (error) {
      console.log(error)
    }
  }
  const loginUserAdm = async (loginData: ILogin) => {
    try {
      const { data } = await api.post("/users/auth", loginData)
      localStorage.setItem("@BESTSHOP:TOKEN", data.token)
      navigate("/adm/dashboard", { replace: true })
    } catch (error) {
      console.log(error)
    }
  }

  const registerUser = async (registerData: IRegister) => {
    try {
      await api.post("/users", registerData)
      toast.success("Cadastro realizado com sucesso.")
    } catch (error) {
      console.log(error)
    }
  }
  const registerUserAdm = async (registerData: IRegister) => {
    try {
      await api.post("/users/admin", registerData)
      toast.success("Cadastro realizado com sucesso.")
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AuthContext.Provider
      value={{ registerUser, registerUserAdm, loginUser, loginUserAdm }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = (): IAuthContext => useContext(AuthContext)
