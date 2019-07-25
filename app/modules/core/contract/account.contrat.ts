import { Document } from 'mongoose';
import { ApiServiceContract } from './api-service.contract';
import { CompanyContract } from './company.contract';




export interface IAccount {

    owner: { _id: any, name: string },
    company?: CompanyContract,
    service?: [{ name: string, api: ApiServiceContract }],

}

export interface AccountContract extends IAccount, Document { }