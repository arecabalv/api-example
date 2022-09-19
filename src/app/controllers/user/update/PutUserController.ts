import { Request, Response, NextFunction } from 'express';
import { BaseController } from '../../BaseController';
import httpStatus from 'http-status';
import { UserCreator } from '@context/user/application/UserCreator';

export class PutUserController implements BaseController {
  constructor(private useCase: UserCreator) { }

  async run(req: Request, res: Response, _next: NextFunction): Promise<void> {
    const id = <string>req.params.user_id;
    await this.useCase.run({ id, ...req.body })
    res.status(httpStatus.CREATED).send()
  }
}
