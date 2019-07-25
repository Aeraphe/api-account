import { Response, Request } from 'express';
import { User } from '../model';
import {
    RoutePathService,
    routerPathService
} from '../../../shared/services/route-path.service';
import { IUserModel } from '../contract/user.model.inderface';
import { from, Observable } from 'rxjs';

export class UserRepository {
    public route: RoutePathService = routerPathService;

    /**
     *Create new User
     *
     * @param {Request} req Express Request
     * @param {Response} res Rexpress Response
     * @memberof UserRepository
     * @return
     */
    async create(req: Request, res: Response) {
        try {
            const UserModel: IUserModel = await new User(req.body);
            return await UserModel.save()
        } catch (error) {
            console.log('Não foi possivel criar o usuário', error);
        }

    }
    /**
     * Find user by e-mail
     * @param req
     * @param res
     */

    findByEmail(email: String): Observable<IUserModel> {
        return from(
            User.findOne({ email })
                .then(user => {
                    return user;
                })
                .catch(error => {
                    return error;
                })
        );
    }

    async getUser(req: Request, res: Response) {
        const id = req.params.userId;
        await User.findById(id, (err, user) => {
            if (err) {
                return res.status(500).json({
                    error: 'Não foi possível localizar o usuário',
                    status: 404
                });
            }
            return res.status(200).json({
                message: 'Usuário encontrado com sucesso!',
                status: 200,
                data: [user],
                url: this.route.getRoute(req)
            });
        });
    }

    async getAllUser(req: Request, res: Response) {
        await User.find({}, (err, user) => {
            if (err) {
                return res.status(500).json({
                    error: 'Não foi possível localizar',
                    status: 404
                });
            }
            return res.status(200).json({
                message: 'Usuário(s) encontrado(s) com sucesso!',
                status: 200,
                data: user,
                url: this.route.getRoute(req)
            });
        });
    }
}

export default new UserRepository();
