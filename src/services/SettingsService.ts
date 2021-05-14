import { Repository } from "typeorm";
import Setting from "../entities/Setting";
import { ISettingsCreate } from "./types";


class SettingsService{

  private settingsRepository: Repository<Setting>;

    async create({chat, username}: ISettingsCreate){
      

    const userExist = await this.settingsRepository.findOne({
      username
    }) ;
    
    if (userExist){
      throw new Error("User already exist");
    }

    
    const settings = this.settingsRepository.create({
      chat,
      username
    });

    
    await this.settingsRepository.save(settings);
    return settings;
  }
}

export default SettingsService;