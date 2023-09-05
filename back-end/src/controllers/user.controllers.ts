import { Request, Response } from "express"
import createUserService from "../services/users/createUser.service"

const createUserController = async (req: Request, res: Response) => {
  const data = await createUserService(req.body)

  return res.status(201).json(data)
}

export { createUserController }
