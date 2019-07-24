import {
    RoutePathService,
    routerPathService
} from '../../../shared/services/route-path.service';
import { Request, Response } from 'express';
import { from, Observable } from 'rxjs';
import { AccountConfirmationModel } from '../model';
import { sign } from 'jsonwebtoken';



export class AccountConfirmationRepository {

    public route: RoutePathService = routerPathService;

    createConfirmationToken(req: Request): Observable<any> {
        try {

            const token = sign({
                data: 'foobar'
            }, 'account_confirmation', { expiresIn: '1h' });

            const data = {
                account_id: req.body.account_id,
                account_email: req.body.account_email,
                token: token
            }
            const accConfirmation = new AccountConfirmationModel(data);
            return from(
                accConfirmation
                    .save()
                    .then((confirmation) => {
                        return { status: 200, token: confirmation.token };
                    })
                    .catch(error => {
                        return { status: 500, error };
                    })
            );
        } catch (e) {
            console.log('Error ao processar a operação: ', e);
        }
    }

    update(req): Observable<any> {
        try {
            return from(
                AccountConfirmationModel.findOneAndUpdate(
                    { _id: req.params.id },
                    { $set: req.body },
                    { new: true }
                )
                    .then(company => {
                        return { status: 200, company };
                    })
                    .catch(error => {
                        return { status: 500, error };
                    })
            );
        } catch (e) {
            console.log('Error:', e);
        }
    }


    get(req: Request): Observable<any> {
        try {
            const id: any = req.params.id;

            return from(
                AccountConfirmationModel.findOne({ _id: id })
                    .then(company => {
                        return { status: 200, company };
                    })
                    .catch(error => {
                        return { status: 500, error };
                    })
            );
        } catch (e) {
            console.log('Error on get company', e);
        }
    }


}

export default new AccountConfirmationRepository();
