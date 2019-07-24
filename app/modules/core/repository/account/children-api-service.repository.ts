import {
    RoutePathService,
    routerPathService
} from '../../../../shared/services/route-path.service';
import { Request } from 'express';
import { childrenApiServiceModel } from 'modules/core/model';




export class childrenApiServiceRepository {
    public route: RoutePathService = routerPathService;

    async create(req: Request): Promise<any> {
        try {
            const Account = new childrenApiServiceModel(req.body);

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


    /**
     * Update record Address
     * @param req 
     */
    async   updateApiServiceName(req: Request): Promise<any> {
        try {

            return await childrenApiServiceModel.findOneAndUpdate(
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


}

export default new childrenApiServiceRepository();
