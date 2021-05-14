export interface ISettingsCreate{
  chat: boolean;
  username: string;
}


export interface IMessagesCreate{
  admin_id?: string;
  text: string;
  user_id: string;
}