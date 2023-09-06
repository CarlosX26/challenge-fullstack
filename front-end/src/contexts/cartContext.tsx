import { createContext, useContext, useState } from "react"
import { ICartProduct, ICartContext } from "./types"
import { useDisclosure } from "@chakra-ui/hooks"
import { toast } from "react-hot-toast"
import api from "../utils/axios"

const CartContext = createContext({} as ICartContext)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, onClose, onOpen } = useDisclosure()

  const [cartList, serCartList] = useState<ICartProduct[]>([])

  const addProduct = async (productId: string) => {
    try {
      const token = localStorage.getItem("@BESTSHOP:TOKEN")

      const { data } = await api.post(
        `/carts/products/${productId}`,
        { amount: 1 },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      serCartList((state) => [...state, data])
      toast.success("Produto adicionado ao carrinho")
    } catch (error) {
      toast.error("Produto já foi adicionado")
    }
  }
  console.log(cartList)

  return (
    <CartContext.Provider
      value={{ cartList, isOpen, onClose, onOpen, addProduct }}
    >
      {children}
    </CartContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCartContext = (): ICartContext => useContext(CartContext)
