import { createContext, useContext, useEffect, useState } from "react"
import { IAuthContext, IUser } from "./types"
import { ILogin, IRegister } from "../validations/types"
import { toast } from "react-hot-toast"
import { useNavigate } from "react-router-dom"
import api from "../utils/axios"

const AuthContext = createContext({} as IAuthContext)

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [user, setUser] = useState<IUser | null>(null)
  const [loading, setLoading] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    // eslint-disable-next-line no-extra-semi
    ;(async () => {
      const token = localStorage.getItem("@BESTSHOP:TOKEN")

      if (token) {
        await getUser(token)
      }
    })()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const getUser = async (token: string) => {
    try {
      setLoading(true)

      const { data } = await api.get("/users/profile", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      setUser(data)

      data.isAdm ? navigate("/adm/dashboard") : navigate("/")
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  const loginUser = async (loginData: ILogin) => {
    try {
      const { data } = await api.post("/users/auth", loginData)
      await getUser(data.token)
      localStorage.setItem("@BESTSHOP:TOKEN", data.token)
      navigate("/", { replace: true })
    } catch (error) {
      console.log(error)
    }
  }
  const loginUserAdm = async (loginData: ILogin) => {
    try {
      const { data } = await api.post("/users/auth", loginData)
      await getUser(data.token)
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

  const logout = () => {
    localStorage.clear()
    navigate("/", { replace: true })
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{
        registerUser,
        registerUserAdm,
        loginUser,
        loginUserAdm,
        user,
        loading,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAuthContext = (): IAuthContext => useContext(AuthContext)
