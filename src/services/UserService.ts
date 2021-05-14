import { Repository } from "typeorm";
import User from "../entities/User";


class UserService {

  private usersRepository: Repository<User>;

    async create(email: string) {

      
      //Verify if user exists
      const userExists = await this.usersRepository.findOne({
        email,
      });
  
      //If it exists, return user
      if (userExists) {
        return userExists;
      }
  
      //If it doesn't exist, save it
      const user = this.usersRepository.create({
        email,
      });
      await this.usersRepository.save(user);
      return user;
    }
  
}

export default UserService;