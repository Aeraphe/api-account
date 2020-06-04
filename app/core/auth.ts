import { Strategy } from 'passport-local';
import { UserModel } from '../modules/core/model';
import { Strategy as JWTStrategy, ExtractJwt } from 'passport-jwt';
require('dotenv').config({ debug: process.env.DEBUG });

export const LoginStrategy = new Strategy(
    {
        usernameField: 'email',
        passwordField: 'password'
    },
    (email, password, done) => {
        UserModel.findOne({ email: email, trash: 0 }, function (err, user) {
            if (err) {
                return done(err);
            }
            if (!user) {
                return done(null, false, { message: 'Email Inválido.' });
            }
            if (!user.checkPassword(password, user.password)) {
                return done(null, false, { message: 'Senha Inválida.' });
            }
            return done(null, user);
        });
    }
);

export const TokenStrategy = new JWTStrategy(
    {
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.TOKEN_SECRET
    }, async (token, done) => {
        try {
            return done(null, token.user);
        } catch (error) {
            done(error);
        }
    }
)

