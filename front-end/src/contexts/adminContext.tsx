import { createContext, useContext } from "react"
import { IAdminContext } from "./types"
import { useDisclosure } from "@chakra-ui/react"
import { IProduct } from "../validations/types"
import { toast } from "react-hot-toast"
import api from "../utils/axios"

const AdminContext = createContext({} as IAdminContext)

export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  const createProduct = async (productData: IProduct) => {
    try {
      const token = localStorage.getItem("@BESTSHOP:TOKEN")

      const { data } = await api.post("/products", productData, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      toast.success("Produto adicionado")
      onClose()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AdminContext.Provider value={{ isOpen, onClose, onOpen, createProduct }}>
      {children}
    </AdminContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAdminContext = (): IAdminContext => useContext(AdminContext)
