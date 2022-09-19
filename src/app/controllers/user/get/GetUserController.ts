import { BaseController } from '@app/controllers/BaseController';
import { UserSearcher } from '@context/user/application/UserSearcher';
import { Request, Response, NextFunction } from 'express';
import httpStatus from 'http-status';

export class GetUserController implements BaseController {
  constructor(private useCase: UserSearcher) { }

  async run(req: Request, res: Response, _next: NextFunction): Promise<void> {
    const userId = req.params.user_id;
    const user = await this.useCase.run(userId);
    res.status(httpStatus.OK).send(user);
  }
}
