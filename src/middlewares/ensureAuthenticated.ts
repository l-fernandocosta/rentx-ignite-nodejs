import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";
import { AppErrors } from "../errors/AppErrors";
import { UserRepository } from "../modules/accounts/repositories/implementations/UserRepository";

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  const authHeaders = request.headers.authorization;

  if (!authHeaders) {
    throw new AppErrors(500, "Missing token");
  }
  /* We split because the request.headers.authorization returns the default JWT pattern ->  'Bearer 1238193819238'
  so, when we spliit, we got in the [0] first position ours Bearer and [1] in the second  position, we get the token. 
  */
  const [, token] = authHeaders.split(" ");

  try {
    const { sub: user_id } = verify(token, process.env.TOKEN_SECRET);
    const userRepository = new UserRepository();

    const user = userRepository.findById(String(user_id));
    if (!user) {
      throw new AppErrors(401, "User does not exists !");
    }

    request.user = {
      id: String(user_id),
    };

    next();
  } catch (err) {
    throw new AppErrors(401, err);
  }
}
