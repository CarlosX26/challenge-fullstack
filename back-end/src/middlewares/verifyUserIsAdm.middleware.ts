import { Request, Response, NextFunction } from "express"

import { User } from "../entities/user.entity"
import AppDataSource from "../data-source"

export const verifyUserIsAdmMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const user = await AppDataSource.getRepository(User)
    .createQueryBuilder("users")
    .where("users.id = :id", {
      id: req.userAuthId,
    })
    .getOne()

  if (!user?.isAdm) {
    return res.status(403).json({
      message: "Access only for admins.",
    })
  }

  return next()
}
