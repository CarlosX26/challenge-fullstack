import { createContext, useContext } from "react"
import { IAdminContext } from "./types"
import { useDisclosure } from "@chakra-ui/react"

const AdminContext = createContext({} as IAdminContext)

export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  return (
    <AdminContext.Provider value={{ isOpen, onClose, onOpen }}>
      {children}
    </AdminContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAdminContext = (): IAdminContext => useContext(AdminContext)
