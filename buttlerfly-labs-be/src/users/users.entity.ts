import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { IUser } from './users.interface';
import { UsersSexEnum } from './users.enum';

@Entity()
export class User implements IUser {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  name: string;

  @Column()
  dateOfBirth: string;

  @Column()
  sex: UsersSexEnum;
}
