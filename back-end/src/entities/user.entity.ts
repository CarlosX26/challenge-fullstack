import { hashSync } from "bcryptjs"
import {
  BeforeInsert,
  BeforeUpdate,
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from "typeorm"

@Entity("user")
export class User {
  @PrimaryGeneratedColumn("uuid")
  id: string

  @Column({ length: 128 })
  name: string

  @Column({ length: 128, unique: true })
  email: string

  @Column({ length: 256 })
  password: string

  @Column({ default: false })
  isAdm: boolean

  @BeforeInsert()
  @BeforeUpdate()
  hashPassword() {
    if (this.password) {
      this.password = hashSync(this.password, 12)
    }
  }
}
