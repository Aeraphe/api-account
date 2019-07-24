import { Router } from 'express';
import { UserRouters } from './core/user.routes';
import { LoginRoutes } from './core/login.routes';
//import * as passport from 'passport';

let router = Router();



router.use('/login', LoginRoutes);

// Define the Core routes (Protected)
router.use(
    '/user',
    UserRouters
);



export default router;
