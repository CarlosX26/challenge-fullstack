import { Request, Response, NextFunction } from "express"
import { verify } from "jsonwebtoken"
import "dotenv/config"

export const verifyUserAuthMiddleware = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const headersAuthorization = req.headers.authorization
  if (!headersAuthorization) {
    return res.status(401).json({
      message: "Authenticate to access.",
    })
  }

  const token = headersAuthorization.split(" ")[1]
  if (token === "undefined") {
    return res.status(401).json({
      message: "Authenticate to access.",
    })
  }

  verify(token, process.env.SECRET_KEY!, (error, decode) => {
    if (error) {
      return res.status(401).json({
        message: error.message,
      })
    }

    req.userAuthId = `${decode?.sub}`
  })

  return next()
}
