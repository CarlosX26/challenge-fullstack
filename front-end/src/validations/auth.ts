import { z } from "zod"

const Login = z.object({
  email: z.string().email().nonempty(),
  password: z.string().nonempty(),
})

export { Login }
