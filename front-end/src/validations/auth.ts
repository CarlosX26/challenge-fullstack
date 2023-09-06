import { z } from "zod"

const Login = z.object({
  email: z.string().nonempty("Campo vazio").email("Email inválido"),
  password: z.string().nonempty("Campo vazio"),
})

const Register = z.object({
  name: z
    .string()
    .nonempty("Campo vazio")
    .min(3, "Mínimo 3 caracteres")
    .max(128, "Máximo de caracteres 128"),
  email: z
    .string()
    .nonempty("Campo vazio")
    .email("Email inválido.")
    .max(128, "Máximo de caracteres 128"),
  password: z
    .string()
    .nonempty("Campo vazio")
    .regex(/[A-Z]/, "Mínimo de 1 letra maiúscula")
    .regex(/[a-z]/, "Mínimo de 1 letra minuscula")
    .regex(/(\d)/, "Mínimo 1 número")
    .regex(/(\W)|_/, "Mínimo de 1 caractere especial")
    .regex(/(.{8,})|_/, "Mínimo de 8 caracteres"),
})

export { Login, Register }
