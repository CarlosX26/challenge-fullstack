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

interface IUser {
  name: string
  email: string
  isAdm: boolean
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

type IModal = "addProduct" | "editProduct" | "deleteProduct"

interface IProduct {
  id: string
  name: string
  description: string
  imgUrl: string
  inventory: number
  price: number
}

interface IProductContext {
  products: IProduct[]
}

export type {
  IAuthContext,
  IUser,
  IAdminContext,
  IProduct,
  IModal,
  IProductContext,
}
