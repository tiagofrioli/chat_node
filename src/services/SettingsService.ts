import { getCustomRepository } from "typeorm";
import SettingsRepository from "../repositories/SettingsRepository";
import { ISettingsCreate } from "./types";


class SettingsService{
    async create({chat, username}: ISettingsCreate){
      
    const settingsRepository = getCustomRepository(SettingsRepository);

    const userExist = await settingsRepository.findOne({
      username
    }) ;
    
    if (userExist){
      throw new Error("User already exist");
    }

    
    const settings = settingsRepository.create({
      chat,
      username
    });

    
    await settingsRepository.save(settings);
    return settings;
  }
}

export default SettingsService;