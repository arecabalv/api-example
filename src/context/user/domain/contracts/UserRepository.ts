import { User } from '../class/User';

export abstract class UserRepository {
  abstract save(user: User): Promise<void>;
  abstract search(userId: string): Promise<User>;
  abstract delete(userId: string): Promise<void>;
}
