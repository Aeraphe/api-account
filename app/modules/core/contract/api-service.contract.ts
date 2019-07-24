import { Document } from 'mongoose';
import { ApiServiceTypeContract } from './api-service-type.contract';


export interface ApiServiceContract extends Document {

    name: string,
    api: ApiServiceTypeContract

}