import { Request, Response, NextFunction } from "express"
import { User } from "../entities/user.entity"
import AppDataSource from "../data-source"

export const verifyEmailMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await AppDataSource.getRepository(User)
    .createQueryBuilder("users")
    .where("users.email = :email", {
      email: req.body.email,
    })
    .getOne()

  if (user) {
    return res.status(400).json({
      message: "Email already exists.",
    })
  }

  return next()
}
