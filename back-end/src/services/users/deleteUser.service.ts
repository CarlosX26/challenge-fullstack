import AppDataSource from "../../data-source"
import { User } from "../../entities/user.entity"

const deleteUserService = async (userId: string): Promise<void> => {
  const userRepo = AppDataSource.getRepository(User)

  const user = await userRepo.findOneBy({ id: userId })

  await userRepo.remove(user!)
}

export default deleteUserService
