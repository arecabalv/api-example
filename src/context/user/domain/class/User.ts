import { AggregateRoot } from '@context/shared/domain/AggregateRoot';
import { UserAge } from './UserAge';
import { UserId } from './UserId';
import { UserName } from './UserName';
import { UserPhone } from './UserPhone';
export class User extends AggregateRoot {
  readonly id: UserId;
  readonly name: UserName;
  readonly phone: UserPhone;
  readonly age: UserAge;
  readonly email: string;

  constructor(params: { id: UserId, name: UserName, phone: UserPhone, age: UserAge, email: string }) {
    super();
    this.id = params.id;
    this.name = params.name
    this.phone = params.phone
    this.age = params.age
    this.email = params.email
  }

  static create(params: { id: string, name: string, phone: string, age: number, email: string }) {
    return new User({
      id: new UserId(params.id),
      name: new UserName(params.name),
      phone: new UserPhone(params.phone),
      age: new UserAge(params.age),
      email: params.email,
    })
  }

  toPrimitives() {
    return {
      id: this.id.value,
      name: this.name.value,
      phone: this.phone.value,
      age: this.age.value,
      email: this.email,
    }
  }
}
