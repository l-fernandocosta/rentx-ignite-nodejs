import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";
import { deleteFile } from "utils/file";
import { inject, injectable } from "tsyringe";

interface IRequest {
  user_id: string;
  avatarFile: string;
}

@injectable()
class UpdateUserAvatarUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUsersRepository
  ) {}

  async execute({ user_id, avatarFile }: IRequest): Promise<void> {
    const user = await this.userRepository.findById(user_id);
    if (user.avatar) {
      await deleteFile(`./tmp/avatar/${user.avatar}`);
    }
    user.avatar = avatarFile;
    await this.userRepository.create(user);
  }
}

export { UpdateUserAvatarUseCase };
