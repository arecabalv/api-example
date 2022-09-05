import { NextFunction, Response, Request } from 'express';
import { BaseError } from '@context/shared/domain/BaseError';
import Logger from '../../context/shared/infrastructure/impl/WinstonLogger';
import container from '../dependency-injection';

const logger: Logger = container.get('Shared.Logger');

export const ErrorHandlerResponse = (error: Error, req: Request, res: Response, _next: NextFunction): Response => {
  printError(error, req);
  if (error instanceof BaseError) return res.status(error.status).send(error.info);
  return res.status(500).send();
};

const printError = (error: Error, req: Request): void => {
  logger.error(`Error on request: ${req.originalUrl}`);
  logger.error(error);
};
