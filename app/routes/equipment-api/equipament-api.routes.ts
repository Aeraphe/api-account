import { Router } from 'express';
import * as passport from 'passport';
import * as httpProxy from 'express-http-proxy';
import RoutePathService from '../../shared/services/route-path.service';

const serviceProxy = httpProxy('api-equipments:5001', {
    https: true,
    proxyReqPathResolver: function (req) {
        const url = RoutePathService.getRoute(req).split('/equipamento');
        const route = '/api/v1/equipment' + url[1]
        return route;
    },
    proxyReqOptDecorator: function (proxyReqOpts, originalReq) {
        proxyReqOpts.rejectUnauthorized = false;
        return proxyReqOpts;
    }
});

let routers = Router();

// Define the Equipment Api Proxi Routes (Protected)
routers.use(
    (req, res, next) => {
        serviceProxy(req, res, next);
    }
);



export default routers;
