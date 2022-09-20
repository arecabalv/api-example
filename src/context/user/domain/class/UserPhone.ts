import GenericBadRequestError from '@context/shared/domain/errors/GenericBadRequestError';
import { StringValueObject } from '@jveraduran/github-npm-registry-be';

export class UserPhone extends StringValueObject {
  constructor(userPhone: string) {
    super(userPhone);
    this.ensureHasLessThanSixtyCharacters();
    this.ensureHasMoreThanTwoCharacters();
  }

  private ensureHasLessThanSixtyCharacters(): void {
    if (this.hasMoreCharacterThan(13)) throw new GenericBadRequestError({ error: 'user phone cannot be longer than 13 characters' });
  }

  private ensureHasMoreThanTwoCharacters(): void {
    if (this.hasLessCharacterThan(11)) throw new GenericBadRequestError({ error: 'user phone cannot be less than 11 characters' });
  }
}
