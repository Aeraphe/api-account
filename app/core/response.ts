import {
    RoutePathService,
    routerPathService
} from '../shared/services/route-path.service';
import { IAeroResponse } from './response.interface';
import { Request } from 'express';

export class AeroResponse implements IAeroResponse {
    public route: RoutePathService = routerPathService;

    create(req: Request, data: any, type?: string) {}
}
