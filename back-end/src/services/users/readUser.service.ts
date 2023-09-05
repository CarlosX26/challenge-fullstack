import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"
import { IUserReturn } from "../../interfaces/user"
import { UserReturn } from "../../schemas/user"

const readUserService = async (userId: string): Promise<IUserReturn> => {
  const userRepo = AppDataSource.getRepository(User)

  const user = await userRepo.findOneBy({ id: userId })

  return UserReturn.parse(user)
}

export default readUserService
