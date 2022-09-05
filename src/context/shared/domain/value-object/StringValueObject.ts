export abstract class StringValueObject {
  readonly value: string;

  constructor(value: string) {
    this.value = value;
  }

  equalsTo(anotherValue: string): boolean {
    return this.value === anotherValue;
  }

  differentTo(anotherValue: string): boolean {
    return this.value !== anotherValue;
  }

  toString(): string {
    return this.value;
  }
}
