import { BaseController } from '@app/controllers/BaseController';
import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';

export class DeleteUserController implements BaseController {
  async run(req: Request, res: Response, _next: NextFunction): Promise<void> {
    res.status(httpStatus.NO_CONTENT).send()
  }
}
