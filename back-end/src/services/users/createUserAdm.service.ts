import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { IUser, IUserReturn } from "../../interfaces/user"
import { UserReturn } from "../../schemas/user"

const createUserAdmService = async (payload: IUser): Promise<IUserReturn> => {
  const userRepo = AppDataSource.getRepository(User)

  const user = userRepo.create({ ...payload, isAdm: true })

  await userRepo.save(user)

  return UserReturn.parse(user)
}

export default createUserAdmService
