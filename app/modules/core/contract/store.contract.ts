import {Document} from 'mongoose';


/**
 * One company can have many stores
 */
export interface StoreContract extends Document{

    company_id:string,
    name:string,
    employees:[{_id:string,ref:string,role:string}],
    api: [{ _id: string,ref:string, tag: String,qt:Number }],
}

