import { ILogin, IProduct, IRegister } from "../validations/types"

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
  adminProducts: IProductAdmin[]
  currentProduct: IProductAdmin | undefined
  onClose(): void
  openModalAddProduct(): void
  openModalEditProduct(): void
  openModalDeleteProduct(): void
  handleProduct(productId: string): void
  createProduct(productData: IProduct): Promise<void>
  updateProduct(productData: IProduct): Promise<void>
}

export type IModal = "addProduct" | "editProduct" | "deleteproduct"

interface IProductAdmin {
  id: string
  name: string
  description: string
  imgUrl: string
  inventory: number
  price: number
}

export type { IAuthContext, IUser, IAdminContext, IProductAdmin }
