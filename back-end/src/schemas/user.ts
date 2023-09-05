import { z } from "zod"

const User = z.object({
  name: z.string().nonempty().max(128).min(3),
  email: z.string().nonempty().email().max(128),
  password: z.string().nonempty().max(256),
})

const UserAuth = z.object({
  email: z.string().nonempty().email(),
  password: z.string().nonempty(),
})

const UserAdm = User.extend({ isAdm: z.boolean().transform(() => true) })

const UserReturn = User.extend({ isAdm: z.boolean() }).omit({ password: true })

export { User, UserReturn, UserAdm, UserAuth }
