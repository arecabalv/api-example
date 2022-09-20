import { NumberValueObject } from '@jveraduran/github-npm-registry-be';

export class UserAge extends NumberValueObject {
  constructor(userAge: number) {
    super(userAge);
  }
}
