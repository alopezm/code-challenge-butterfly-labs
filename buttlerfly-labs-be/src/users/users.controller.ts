import { BadRequestException, Body, Controller, Get, Post } from '@nestjs/common';
import { CreateUserDTO, UserDTO } from './users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Get()
  index(): Promise<UserDTO[]> {
    return this.usersService.findAll();
  }

  @Post()
  createUser(@Body() body: CreateUserDTO): Promise<UserDTO> {
    return this.usersService.create(body);
  }
}
