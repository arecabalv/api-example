import { BaseController } from '@app/controllers/BaseController';
import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';

export class GetUserController implements BaseController {
  async run(req: Request, res: Response, _next: NextFunction): Promise<void> {
    res.status(httpStatus.OK).send([{
      id: 'ce017a56-2dcf-11eb-8381-0a87cf3d6bd2',
      name: 'some name',
      age: 21,
      phone: '+56975889579',
      email: 'email.test@test.com',
    }])
  }
}
