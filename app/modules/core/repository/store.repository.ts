import { StoreModel} from '../model';
import {
    RoutePathService,
    routerPathService
} from '../../../shared/services/route-path.service';
import { Request, Response } from 'express';
import { from, Observable } from 'rxjs';


export class StoreRepository {
    public route: RoutePathService = routerPathService;

    create(req: Request): Observable<any> {
        try {
            const Store = new StoreModel(req.body);
            return from(
                Store
                    .save()
                    .then(company => {
                        return { status: 200, company };
                    })
                    .catch(error => {
                        return { status: 500, error };
                    })
            );
        } catch (e) {
            console.log('Error ao processar a operação: ', e);
        }
    }
}