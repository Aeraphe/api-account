import { Schema } from 'mongoose';


export const ApiServiceSchema: Schema = new Schema({
    name: String,
    tag: String,
    description: String,
    created_at: { type: Date, default: Date.now }
});


