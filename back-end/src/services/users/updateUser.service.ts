import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { IUserReturn, IUserUpdate } from "../../interfaces/user"
import { UserReturn } from "../../schemas/user"

const updateUserService = async (
  payload: IUserUpdate,
  userId: string
): Promise<IUserReturn> => {
  const userRepo = AppDataSource.getRepository(User)

  const user = await userRepo.findOneBy({ id: userId })

  await userRepo.save({ ...user, ...payload })

  return UserReturn.parse(user)
}

export default updateUserService
