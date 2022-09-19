import { User } from '../domain/class/User';
import { UserRepository } from '../domain/contracts/UserRepository';

export class UserSearcher {
  constructor(private repository: UserRepository) { }

  async run(userId: string): Promise<User> {
    return this.repository.search(userId);
  }
}
