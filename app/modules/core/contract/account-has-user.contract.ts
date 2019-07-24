import {Document} from 'mongoose';


/**
 * O usuaro pode pertencer a varias contas e ter em cada uma sua função
 */
export interface AccountHasUserContract extends Document{

    account_id:string,
    user_id:string,
    api:{_id:string,name:string},
    roles:[{role:string,permissions:[]}]
}