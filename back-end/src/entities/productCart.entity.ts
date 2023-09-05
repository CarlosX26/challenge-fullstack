import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity("productsCarts")
export class ProductCart {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ type: "integer" })
  amount: number
}
