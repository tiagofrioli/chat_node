import UsersRepository from "../repositories/UsersRepository";


class UserService {

    async create(email: string) {

      const usersRepository = new UsersRepository();
      //Verify if user exists
      const userExists = await usersRepository.findOne({
        email,
      });
  
      //If it exists, return user
      if (userExists) {
        return userExists;
      }
  
      //If it doesn't exist, save it
      const user = usersRepository.create({
        email,
      });
      await usersRepository.save(user);
      return user;
    }
  
}

export default UserService;