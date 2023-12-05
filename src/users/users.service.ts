import { Injectable } from '@nestjs/common';

export type User = {
  id: number;
  username: string;
  password: string;
  age: number;
  email: string;
};

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      username: 'john',
      password: '123456',
      age: 29,
      email: 'john@gmail.com',
    },
    {
      id: 2,
      username: 'piero',
      password: '123456',
      age: 26,
      email: 'piero@gmail.com',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
