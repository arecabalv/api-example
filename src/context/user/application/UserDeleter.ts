import { UserRepository } from '../domain/contracts/UserRepository';

export class UserDeleter {
  constructor(private repository: UserRepository) { }

  async run(userId: string): Promise<void> {
    return this.repository.delete(userId);
  }
}
