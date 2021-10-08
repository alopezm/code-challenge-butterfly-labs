import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateUserDTO } from './users.dto';
import { User } from './users.entity';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
  ) {}

  findAll(): Promise<User[]> {
    return this.usersRepository.find();
  }

  async create(user: CreateUserDTO) {
    const { email } = user;
    const oldUser = await this.usersRepository.findOne({ where: { email } });

    if (oldUser) {      
      throw new BadRequestException(
        `The user with email ${email} is already created`,
      );
    }

    return this.usersRepository.save(user);
  }
}
