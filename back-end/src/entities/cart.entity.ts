import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("carts")
export class Cart {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ length: 64 })
  status: string
}
