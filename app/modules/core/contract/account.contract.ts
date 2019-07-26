import { ApiServiceContract } from './api-service.contract';
import { CompanyContract } from './company.contract';


export interface AccountContract {

    owner: { _id: any, name: string },
    company?: CompanyContract,
    service?: [{ name: string, api: ApiServiceContract }],

}

