import {  Schema } from 'mongoose';


export const AccountHasUserSchema: Schema = new Schema({
    account_id: String,
    user_id: String,
    api: { _id: String, name: String },
    roles: [{ role: String, permissions: [] }],
    created_at: { type: Date, default: Date.now }
});


