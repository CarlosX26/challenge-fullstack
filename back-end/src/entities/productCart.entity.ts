import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm"
import { Cart } from "./cart.entity"
import { Product } from "./product.entity"

@Entity("productsCarts")
export class ProductCart {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ type: "integer" })
  amount: number

  @ManyToOne(() => Cart, (cart) => cart.productCart)
  cart: Cart

  @ManyToOne(() => Product, (product) => product.productCart)
  product: Product
}
