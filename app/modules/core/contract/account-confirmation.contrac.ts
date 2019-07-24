import { Document } from 'mongoose';


export interface AccountConfirmationContract extends Document {

    account_id: string,
    account_email: string,
    token: string


}