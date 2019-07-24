import Company from '../repository/company.repository';
import CompanyResponse from '../response/company.response';

import { Request, Response } from 'express';

export class CompanyController {
    public async create(req: Request, res: Response) {
        Company.create(req).subscribe(company => {
            const response = CompanyResponse.create(req, company);
            res.status(response.status).json(response);
        });
    }

    public async getAll(req: Request, res: Response) {
        await Company.getAll(req, res);
    }

    public get(req: Request, res: Response) {
        Company.get(req).subscribe(company => {
            res.status(200).json(company);
        });
    }

    public update(req: Request, res: Response) {
        console.log(req.body, req.params);
        Company.update(req).subscribe(company => {
            res.status(200).json(company);
        });
    }

    public updateAddres(req: Request, res: Response) {
        console.log(req.body, req.params);
        Company.updateAddress(req).subscribe(company => {
            res.status(200).json(company);
        });
    }
}
