import {
    RoutePathService,
    routerPathService
} from '../../../../shared/services/route-path.service';
import { Request, Response } from 'express';
import { from, Observable } from 'rxjs';
import { AccountModel } from '../../model';


export class AccountRepository {
    public route: RoutePathService = routerPathService;

    async create(req: Request): Promise<any> {
        try {
            const Account = new AccountModel(req.body);

            return await Account.save()
                .then(record => {
                    return { status: 200, record };
                })
                .catch(error => {
                    return { status: 500, error };
                })

        } catch (e) {
            console.log('Error ao processar a operação: ', e);
        }
    }

    async  update(req: Request): Promise<any> {
        try {

            return await AccountModel.findOneAndUpdate(
                { _id: req.params.id },
                { $set: req.body },
                { new: true }
            )
                .then(record => {
                    return { status: 200, record };
                })
                .catch(error => {
                    return { status: 500, error };
                })

        } catch (e) {
            console.log('Error:', e);
        }
    }
    /**
     * Update record Address
     * @param req 
     */
    async   updateApiServiceName(req: Request): Promise<any> {
        try {

            return await AccountModel.findOneAndUpdate(
                { _id: req.params.recordId, 'service._id': req.params.addressId },
                { $set: req.body.name },
                { new: true }
            )
                .then(record => {
                    return { status: 200, record };
                })
                .catch(error => {
                    return { status: 500, error };
                })

        } catch (e) {
            console.log('Error:', e);
        }
    }

    get(req: Request): Observable<any> {
        try {
            const id: any = req.params.id;

            return from(
                AccountModel.findOne({ _id: id })
                    .then(record => {
                        return { status: 200, record };
                    })
                    .catch(error => {
                        return { status: 500, error };
                    })
            );
        } catch (e) {
            console.log('Error on get record', e);
        }
    }

    async getAll(req: Request, res: Response) {
        AccountModel.find({}, (err, record) => {
            if (err) {
                return res.status(404).json({
                    message: 'Não foi possível efetuar a operação',
                    status: 404
                });
            }
            return res.status(200).json({
                message: 'Operação realizada com sucesso!!!',
                status: 200,
                data: [record],
                url: this.route.getRoute(req)
            });
        });
    }
}

export default new AccountRepository();
