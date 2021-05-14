import UserService from "../services/UserService";
import { Response, Request } from 'express';


class UsersController{

  async create(response: Response, request: Request): Promise<Response>{

    const { email } = request.body;

    const userService = new UserService();

    const user = await userService.create(email);

    return response.json(user);

  }
}

export default UsersController;