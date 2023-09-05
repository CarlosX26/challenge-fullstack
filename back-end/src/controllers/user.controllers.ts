import { Request, Response } from "express"
import createUserService from "../services/users/createUser.service"
import createUserAdmService from "../services/users/createUserAdm.service"
import authUserService from "../services/users/authUser.service"

const authUserController = async (req: Request, res: Response) => {
  const data = await authUserService(req.body)

  return res.status(200).json(data)
}

const createUserController = async (req: Request, res: Response) => {
  const data = await createUserService(req.body)

  return res.status(201).json(data)
}

const createUserAdmController = async (req: Request, res: Response) => {
  const data = await createUserAdmService(req.body)

  return res.status(201).json(data)
}

export { createUserController, createUserAdmController, authUserController }
