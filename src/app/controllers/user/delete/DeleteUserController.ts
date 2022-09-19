import { BaseController } from '@app/controllers/BaseController';
import { UserDeleter } from '@context/user/application/UserDeleter';
import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';

export class DeleteUserController implements BaseController {
  constructor(private useCase: UserDeleter) { }

  async run(req: Request, res: Response, _next: NextFunction): Promise<void> {
    const userId = req.params.user_id;
    await this.useCase.run(userId);
    res.status(httpStatus.NO_CONTENT).send()
  }
}
