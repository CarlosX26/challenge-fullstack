import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm"
import { User } from "./user.entity"
import { ProductCart } from "./productCart.entity"

@Entity("carts")
export class Cart {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ length: 64 })
  status: string

  @ManyToOne(() => User, (user) => user.carts)
  user: User

  @OneToMany(() => ProductCart, (productCart) => productCart.cart)
  productCart: ProductCart[]
}
