import { Request, Response,Router } from 'express';
import { UserController } from '../../modules/core/controllers/user.controller';
export const  UserRouters = Router();
const userController: UserController =  new UserController()

UserRouters.post('/', userController.create);
UserRouters.get('/:userId', userController.get);
UserRouters.get('/', userController.getAll);
UserRouters.put('/:userId', userController.update);
UserRouters.delete('/:projectId', userController.delete);
