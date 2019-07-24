import { Router } from 'express';
import * as httpProxy from 'express-http-proxy';
import RoutePathService from '../../shared/services/route-path.service';

const serviceProxy = httpProxy('api-inventory:5002', {
    https: true,
    proxyReqPathResolver: function (req) {
        const url = RoutePathService.getRoute(req).split('/estoque');
        const route = '/api/v1' + url[1]
        return route;
    },
    proxyReqOptDecorator: function (proxyReqOpts, originalReq) {
        proxyReqOpts.rejectUnauthorized = false;
        return proxyReqOpts;
    }
});

let routers = Router();

// Define the Inventory Api Proxi Routes (Protected)
routers.use(
    (req, res, next) => {
        serviceProxy(req, res, next);
    }
);



export default routers;
