import { Router, Request, Response, NextFunction } from 'express';
import container from '@app/dependency-injection';
import { GetUserController } from '@app/controllers/user/get/GetUserController';
import { PutUserController } from '@app/controllers/user/update/PutUserController';
import { DeleteUserController } from '@app/controllers/user/delete/DeleteUserController';

export const register = (router: Router) => {
  const getUserController: GetUserController = container.get('Controller.Get.User');
  const putUserController: PutUserController = container.get('Controller.Put.User')
  const deleteUserController: DeleteUserController = container.get('Controller.Delete.User')

  router.get('/user/:user_id', (req: Request, res: Response, next: NextFunction) => {
    return getUserController.run(req, res, next);
  });

  router.put('/user/:user_id', (req: Request, res: Response, next: NextFunction) => {
    return putUserController.run(req, res, next);
  });

  router.delete('/user/:user_id', (req: Request, res: Response, next: NextFunction) => {
    return deleteUserController.run(req, res, next);
  });
};
