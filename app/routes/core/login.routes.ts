import { Router } from 'express';
import { LoginController } from '../../modules/core/controllers/login.controller';
const loginController = new LoginController();

export const LoginRoutes = Router();

LoginRoutes.post('/', loginController.login);
LoginRoutes.get('/', loginController.logout);
LoginRoutes.get('/:id', loginController.forgotPassword);
