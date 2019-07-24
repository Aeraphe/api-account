import { Request } from 'express';
import * as url from 'url';

export class RoutePathService {
    getRoute(req: Request) {
        return url.format({
            protocol: req.protocol,
            host: req.get('host'),
            pathname: req.originalUrl
        });
    }
}

export const routerPathService: RoutePathService = new RoutePathService();

export default new RoutePathService();
