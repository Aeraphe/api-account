import { Request } from 'express';
import { AeroResponse } from '../../../core/response';


export class CompanyResponse extends AeroResponse {
    constructor(){
        super()
    }
    create(req: Request, data:any): any {
        if (data.status != 200) {
            return {
                message: 'Não foi possível cadastrar a Empresa',
                ...data
            };
        }
        return {
            message: 'Empresa cadastrada com sucesso!!!',
            status: data.status,
            data: [
                {
                    _id: data.company._id,
                    name: data.company.name,
                    description: data.company.decription,
                    cellphones: data.company.cellphones,
                    address: data.company.address,

                }
            ],
            url: this.route.getRoute(req)
        };
    }
}

export default new CompanyResponse();
