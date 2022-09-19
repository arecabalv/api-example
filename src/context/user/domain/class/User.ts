export class User {
  readonly id: string;
  readonly name: string;
  readonly phone: string;
  readonly age: number;
  readonly email: string;

  constructor(params: { id: string, name: string, phone: string, age: number, email: string }) {
    this.id = params.id;
    this.name = params.name
    this.phone = params.phone
    this.age = params.age
    this.email = params.email
  }
}
