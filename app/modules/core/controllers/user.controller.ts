import { Response, Request } from 'express';
import User from '../repository/user.repository';
import * as bcrypt from 'bcrypt';
import UserResponse from '../response/user.response';
import { Account } from '../repository/account/account.repository';
import { IAccount } from '../contract/account.contrat';



export class UserController {
    /**
     *Create new user
     *
     * @param {Request} req
     * @param {Response} res
     * @memberof UserController
     */
    async create(req: Request, res: Response) {
        try {
            const saltRounds = 10;
            req.body.password = await bcrypt.hash(req.body.password, saltRounds);
            const user = await User.create(req, res);
            let data: IAccount = {
                owner: { _id: user._id, name: user.name }
            };
            const account = await Account.create(data);
            return res.status(200).json(UserResponse.create(req, {
                status: 200,
                data: { user: user, account: account }
            }));

        } catch (error) {
            res.status(500).json({ data: { error } })
        }

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
