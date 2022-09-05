import { Request, Response, NextFunction } from 'express';
import { BaseController } from '../../BaseController';
import httpStatus from 'http-status';

export class PutUserController implements BaseController {
  async run(req: Request, res: Response, _next: NextFunction): Promise<void> {
    res.status(httpStatus.CREATED).send()
  }
}
