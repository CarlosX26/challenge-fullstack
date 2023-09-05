import { Column, PrimaryGeneratedColumn } from "typeorm"

export class Product {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ length: 128, unique: true })
  name: string

  @Column({ length: 128, nullable: true })
  description: string

  @Column({ length: 256, nullable: true })
  img_url: string

  @Column({ type: "integer" })
  inventory: number

  @Column({ type: "integer" })
  price: number
}
