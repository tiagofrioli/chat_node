import { Request, response, Response} from 'express';
import { getCustomRepository } from 'typeorm';
import SettingsRepository from '../repositories/SettingsRepository';
import SettingsService from '../services/SettingsService';

class SettingsController{

 async create (req: Request, res: Response){
    
      const { chat, username }= req.body;

      const settingsService = new SettingsService();

     try {

      const settings = settingsService.create({chat, username});

      return res.json(settings);
       
     } catch (error) {
       
       return response.status(400).json({message: error.message });
     }

 }
}

export default SettingsController;