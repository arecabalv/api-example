import { User } from '../domain/class/User';
import { UserRepository } from '../domain/contracts/UserRepository';

export class UserCreator {
  constructor(private repository: UserRepository) { }

  async run(body: { id: string, name: string, phone: string, age: number, email: string }): Promise<void> {
    const user = new User(body);
    return this.repository.save(user);
  }
}
