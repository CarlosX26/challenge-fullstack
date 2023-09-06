import { createContext, useContext, useEffect, useState } from "react"
import { IAdminContext, IModal, IProductAdmin } from "./types"
import { useDisclosure } from "@chakra-ui/react"
import { IProduct } from "../validations/types"
import { toast } from "react-hot-toast"
import api from "../utils/axios"

const AdminContext = createContext({} as IAdminContext)

export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  const [adminProducts, setAdminProducts] = useState<IProductAdmin[]>([])
  const [currentProduct, setCurrentProduct] = useState<IProductAdmin>()
  const [modal, setModal] = useState<IModal>("addProduct")

  const openModalAddProduct = () => {
    setModal("addProduct")
    onOpen()
  }
  const openModalEditProduct = () => {
    setModal("editProduct")
    onOpen()
  }
  const openModalDeleteProduct = () => {
    setModal("deleteproduct")
    onOpen()
  }

  useEffect(() => {
    getAdminProducts()
  }, [])

  const handleProduct = (productId: string) => {
    const product = adminProducts.find((product) => product.id === productId)
    setCurrentProduct(product)
  }

  const getAdminProducts = async () => {
    try {
      const token = localStorage.getItem("@BESTSHOP:TOKEN")

      const { data } = await api.get("/products/admin", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      setAdminProducts(data)
    } catch (error) {
      console.log(error)
    }
  }

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

  const updateProduct = async (productData: IProduct) => {
    try {
      const token = localStorage.getItem("@BESTSHOP:TOKEN")

      const { data } = await api.patch(
        `/products/${currentProduct?.id}`,
        productData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      const updateAdminProducts = adminProducts.map((product) => {
        if (product.id === currentProduct?.id) {
          return { ...currentProduct, ...data }
        }
        return product
      })

      setAdminProducts(updateAdminProducts)

      toast.success("Produto atualizado")
      onClose()
      console.log(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <AdminContext.Provider
      value={{
        isOpen,
        modal,
        currentProduct,
        adminProducts,
        onClose,
        openModalAddProduct,
        openModalEditProduct,
        openModalDeleteProduct,
        createProduct,
        updateProduct,
        handleProduct,
      }}
    >
      {children}
    </AdminContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useAdminContext = (): IAdminContext => useContext(AdminContext)
