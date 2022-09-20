import GenericBadRequestError from '@context/shared/domain/errors/GenericBadRequestError';
import { StringValueObject } from '@jveraduran/github-npm-registry-be';

export class UserName extends StringValueObject {
  constructor(userName: string) {
    super(userName);
    this.ensureHasLessThanSixtyCharacters();
    this.ensureHasMoreThanTwoCharacters();
  }

  private ensureHasLessThanSixtyCharacters(): void {
    if (this.hasMoreCharacterThan(60)) throw new GenericBadRequestError({ error: 'username cannot be longer than 60 characters' });
  }

  private ensureHasMoreThanTwoCharacters(): void {
    if (this.hasLessCharacterThan(2)) throw new GenericBadRequestError({ error: 'username cannot be less than 2 characters' });
  }
}
