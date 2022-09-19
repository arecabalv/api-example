import { User } from '@context/user/domain/class/User';
import { UserRepository } from '@context/user/domain/contracts/UserRepository';
import { serialize, deserialize } from 'bson';
import fs from 'fs';

export class FileUserRepository implements UserRepository {
  async save(user: User): Promise<void> {
    fs.promises.writeFile(this.filePath(user.id), serialize(user));
  }

  async search(userId: string): Promise<User> {
    const userData = await fs.promises.readFile(this.filePath(userId));
    const { id, name, phone, age, email } = deserialize(userData);
    return new User({ id, name, phone, age, email });
  }

  async delete(userId: string): Promise<void> {
    fs.promises.rm(this.filePath(userId));
  }

  private filePath(id: string): string {
    return `${__dirname}/users.${id}.repository`
  }
}
