import { BaseError } from '@context/shared/domain/BaseError';
import httpStatus from 'http-status';

export default class GenericBadRequestError extends BaseError {
  constructor(
      info: { error: string } = { error: 'invalid request' },
      status: number = httpStatus.BAD_REQUEST,
      message: string = 'invalid request',
  ) {
    super(message, status, info);
  }
}
