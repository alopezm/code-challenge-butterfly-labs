import { UsersSexEnum } from "./users.enum";

export interface IUser {
  id: number;
  email: string;
  name: string;
  dateOfBirth: string;
  sex: UsersSexEnum;
}