import React, { createContext, useContext, useEffect, useState } from "react"
import { IProductContext, IProduct } from "./types"
import api from "../utils/axios"

const ProductContext = createContext({} as IProductContext)

export const ProductProvider = ({
  children,
}: {
  children: React.ReactNode
}) => {
  const [products, setProducts] = useState<IProduct[]>([])
  const [filter, setFilter] = useState("")

  useEffect(() => {
    getProducts()
  }, [])

  const getProducts = async () => {
    try {
      const { data } = await api.get("/products")

      setProducts(data)
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <ProductContext.Provider value={{ products, filter, setFilter }}>
      {children}
    </ProductContext.Provider>
  )
}

// eslint-disable-next-line react-refresh/only-export-components
export const useProductContext = (): IProductContext =>
  useContext(ProductContext)
