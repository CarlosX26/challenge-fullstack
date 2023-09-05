import { z } from "zod"

const Login = z.object({
  email: z.string().email("Email inválido.").nonempty("Campo vazio"),
  password: z.string().nonempty("Campo vazio"),
})

const Register = z.object({
  name: z.string().nonempty("Campo vazio").min(3).max(128),
  email: z.string().email("Email inválido.").nonempty("Campo vazio").max(128),
  password: z.string().nonempty("Campo vazio"),
})

export { Login, Register }
