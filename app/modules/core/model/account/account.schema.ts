import { Schema } from 'mongoose';
import { CompanySchema } from '../company.schema';
import { childrenApiServiceSchema } from './children-api-service.schema';




export const AccountSchema: Schema = new Schema({
    owner: { _id: String, name: String },
    company: CompanySchema,
    service: [childrenApiServiceSchema],
    created_at: { type: Date, default: Date.now },
    trash: { type: Number, default: 0 }
});

