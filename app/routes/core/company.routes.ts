import { Request, Response, Router } from 'express';
import { CompanyController } from '../../modules/core/controllers/company.controller';
const companyController = new CompanyController();

export const CompanyRouters = Router();
export const CompanyAddressRouters = Router();


CompanyRouters.post('/', companyController.create);
CompanyRouters.get('/', companyController.getAll);
CompanyRouters.get('/:id', companyController.get);
CompanyRouters.patch('/:id',companyController.update)

CompanyAddressRouters.patch('/:companyId/:addressId',companyController.updateAddres)
