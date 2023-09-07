import { createContext, useContext, useEffect, useState } from "react"
import { ICartProduct, ICartContext } from "./types"
import { useDisclosure } from "@chakra-ui/hooks"
import { toast } from "react-hot-toast"
import { useAuthContext } from "./authContext"
import { useNavigate } from "react-router-dom"
import api from "../utils/axios"

const CartContext = createContext({} as ICartContext)

export const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const { isOpen, onClose, onOpen } = useDisclosure()
  const navigate = useNavigate()
  const { user } = useAuthContext()
  const [loading, setLoading] = useState(false)
  const [cartList, serCartList] = useState<ICartProduct[]>([])

  const totalItems = cartList.reduce((acc, acv) => acc + acv.amount, 0)

  useEffect(() => {
    getCartList()
  }, [])

  const getCartList = async () => {
    try {
      const token = localStorage.getItem("@BESTSHOP:TOKEN")

      const { data } = await api.get("/carts/view", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })

      if (!data) {
        return null
      }

      serCartList(data.productCart)
    } catch (error) {
      console.log(error)
    }
  }

  const addProduct = async (productId: string) => {
    try {
      if (!user) {
        return navigate("/auth")
      }

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

  const updateProduct = async (productId: string, amount: number) => {
    try {
      const token = localStorage.getItem("@BESTSHOP:TOKEN")

      const { data } = await api.patch(
        `/carts/products/${productId}`,
        { amount },
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      const updateCartList = cartList.map((cartProduct) => {
        if (cartProduct.product.id === productId) {
          return data
        }
        return cartProduct
      })

      serCartList(updateCartList)
    } catch (error) {
      console.log(error)
    }
  }

  const deleteProduct = async (productId: string) => {
    try {
      const token = localStorage.getItem("@BESTSHOP:TOKEN")

      await api.delete(
        `/carts/products/${productId}`,

        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      const updateCartList = cartList.filter(
        (cartProduct) => cartProduct.product.id !== productId
      )

      serCartList(updateCartList)
    } catch (error) {
      console.log(error)
    }
  }

  const checkout = async () => {
    try {
      setLoading(true)
      const token = localStorage.getItem("@BESTSHOP:TOKEN")
      await api.post(
        "/carts/checkout",
        {},
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      )

      serCartList([])
      toast.success("Em instantes você receberá um email de confirmação")
      onClose()
    } catch (error) {
      console.log(error)
    } finally {
      setLoading(false)
    }
  }

  return (
    <CartContext.Provider
      value={{
        cartList,
        totalItems,
        isOpen,
        onClose,
        onOpen,
        addProduct,
        updateProduct,
        deleteProduct,
        checkout,
        loading,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useCartContext = (): ICartContext => useContext(CartContext)
