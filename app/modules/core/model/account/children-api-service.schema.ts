import { Schema } from 'mongoose';
import { ApiServiceTypeSchema } from '../api-service-type.schema';


export const childrenApiServiceSchema: Schema = new Schema({
    name: String,
    api:ApiServiceTypeSchema
});

