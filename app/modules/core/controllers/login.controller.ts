import { Response, Request } from 'express';
import * as passport from 'passport';
import * as jwt from 'jsonwebtoken';
import LoginResponse from '../response/login.response';
import { IUserModel } from '../contract/user.model.inderface';

export class LoginController {
    /**
     * Session Login
     * @param req
     * @param res
     */
    public login(req: Request, res: Response, next) {
        passport.authenticate(
            'local',
            { session: false },
            (err, user: IUserModel, info) => {
                let status;
                let token;
                if (err || !user) {
                    status = 400;
                } else {
                    req.login(user, { session: false }, err => {
                        if (err) {
                            res.send(err);
                        }
                        token = jwt.sign(
                            { user: { _id: user._id, email: user.email, name: user.name } },
                            process.env.TOKEN_SECRET
                        );
                        status = 200;
                    });
                }

                let response = LoginResponse.create(req, {
                    status,
                    user,
                    token
                });
                return res.status(response.status).json(response);
            }
        )(req, res);
    }

    public logout() { }

    public forgotPassword() { }
}
