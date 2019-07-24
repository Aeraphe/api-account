import { Schema } from 'mongoose';



export const AccountConfirmationSchema: Schema = new Schema({
    account_id: String,
    account_email: String,
    token: String,
    created_at: { type: Date, default: Date.now }

});


