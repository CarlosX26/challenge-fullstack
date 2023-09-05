import { compare } from "bcryptjs"
import { sign } from "jsonwebtoken"
import { IUserAuth } from "../../interfaces/user"
import { User } from "../../entities/user.entity"
import AppDataSource from "../../data-source"
import AppError from "../../error"
import "dotenv/config"

const authUserService = async ({
  email,
  password,
}: IUserAuth): Promise<{ token: string }> => {
  const user = await AppDataSource.getRepository(User)
    .createQueryBuilder("users")
    .where("users.email = :email", {
      email,
    })
    .getOne()

  if (!user) {
    throw new AppError("Wrong email or password.", 401)
  }

  const verifyPassword = await compare(password, user.password)

  if (!verifyPassword) {
    throw new AppError("Wrong email or password.", 401)
  }

  const token = sign(
    { name: user.name, isAdm: user.isAdm },
    process.env.SECRET_KEY!,
    {
      expiresIn: "24h",
      subject: user.id,
    }
  )

  return {
    token,
  }
}

export default authUserService
