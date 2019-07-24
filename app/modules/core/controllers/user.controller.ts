import { Response, Request } from 'express';
import User from '../repository/user.repository';
import * as bcrypt from 'bcrypt';
import UserResponse from '../response/user.response';

export class UserController {
    /**
     *Create new user
     *
     * @param {Request} req
     * @param {Response} res
     * @memberof UserController
     */
    public create(req: Request, res: Response) {
        const saltRounds = 10;

        bcrypt.hash(req.body.password, saltRounds, (err, hash) => {
            if (err) {
                console.log('error on create new user');
            } else {
                req.body.password = hash;
                User.create(req, res).subscribe(newUser => {
                    const response = UserResponse.create(req, newUser);
                    res.status(response.status).json(response);
                });
            }
        });
    }

    /**
     *
     *
     * @param {Request} req
     * @param {Response} res
     * @memberof UserController
     */
    public async get(req: Request, res: Response) {
        await User.getUser(req, res);
    }

    /**
     *
     *
     * @param {Request} req
     * @param {Response} res
     * @memberof UserController
     */
    public async getAll(req: Request, res: Response) {
        await User.getAllUser(req, res);
    }

    /**
     *
     *
     * @param {Request} req
     * @param {Response} res
     * @memberof UserController
     */
    public async update(req: Request, res: Response) {
        await User.getUser(req, res);
    }

    /**
     *
     *
     * @param {Request} req
     * @param {Response} res
     * @memberof UserController
     */
    public async delete(req: Request, res: Response) {
        await User.getUser(req, res);
    }
}
