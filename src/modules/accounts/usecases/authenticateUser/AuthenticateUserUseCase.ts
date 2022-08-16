import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";
import { AppErrors } from "../../../../errors/AppErrors";
import { IUsersRepository } from "../../repositories/IUsersRepository";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UserRepository")
    private userRepository: IUsersRepository
  ) {}

  async handle({ email, password }: IRequest): Promise<IResponse> {
    const errorInvalidationMessage = "Email or password are incorrect !";
    const user = await this.userRepository.findByEmail(email);
    if (!user) {
      throw new AppErrors(401, errorInvalidationMessage);
    }

    const passwordMatch = await compare(password, user.password);
    if (!passwordMatch) {
      throw new AppErrors(401, errorInvalidationMessage);
    }

    const token = sign({}, process.env.TOKEN_SECRET, {
      subject: user.id,
      expiresIn: "1d",
    });

    return {
      user: {
        name: user.name,
        email: user.email,
      },
      token,
    };
  }
}
export { AuthenticateUserUseCase };
