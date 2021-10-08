import { IsDateString, IsEmail, IsEnum, IsNotEmpty, IsNumber, IsString } from "class-validator"
import { IUser } from "./users.interface";
import { UsersSexEnum } from "./users.enum";

export class UserDTO implements IUser {
  @IsNumber()
  id: number;

  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDateString()
  dateOfBirth: string;

  @IsEnum(UsersSexEnum)
  sex: UsersSexEnum;
}

export class CreateUserDTO implements Omit<IUser, 'id'> {
  @IsEmail()
  email: string;

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDateString()
  dateOfBirth: string;

  @IsEnum(UsersSexEnum)
  sex: UsersSexEnum;
}