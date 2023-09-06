import { ILogin, IProductForm, IRegister } from "../validations/types"

interface IAuthContext {
  loginUser(loginData: ILogin): Promise<void>
  loginUserAdm(loginData: ILogin): Promise<void>
  registerUser(registerData: IRegister): Promise<void>
  registerUserAdm(registerData: IRegister): Promise<void>
  user: IUser | null
  loading: boolean
  logout(): void
}

interface IAdminContext {
  isOpen: boolean
  modal: IModal
  adminProducts: IProduct[]
  currentProduct: IProduct | undefined
  onClose(): void
  openModalAddProduct(): void
  openModalEditProduct(): void
  openModalDeleteProduct(): void
  handleProduct(productId: string): void
  createProduct(productData: IProductForm): Promise<void>
  updateProduct(productData: IProductForm): Promise<void>
  deleteProduct(): Promise<void>
}
interface IProductContext {
  products: IProduct[]
  filter: string
  setFilter: React.Dispatch<React.SetStateAction<string>>
}
interface ICartContext {
  isOpen: boolean
  onClose(): void
  onOpen(): void
  addProduct(productId: string): void
  updateProduct(productId: string, amount: number): Promise<void>
  deleteProduct(productId: string): Promise<void>
  cartList: ICartProduct[]
}

type IModal = "addProduct" | "editProduct" | "deleteProduct"

interface IUser {
  name: string
  email: string
  isAdm: boolean
}

interface IProduct {
  id: string
  name: string
  description: string
  imgUrl: string
  inventory: number
  price: number
}

interface ICartProduct {
  id: string
  amount: number
  product: IProduct
}

export type {
  IAuthContext,
  IUser,
  IAdminContext,
  IProduct,
  IModal,
  IProductContext,
  ICartContext,
  ICartProduct,
}
