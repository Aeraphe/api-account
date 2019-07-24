import { Document } from 'mongoose';
import { ApiServiceContract } from './api-service.contract';
import { CompanyContract } from './company.contract';




export interface AccountContract extends Document {

    owner: { _id: string, name: string },
    company: CompanyContract,
    service?: [{ name: string, api: ApiServiceContract }],

}