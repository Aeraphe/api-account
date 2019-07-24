import { Document } from 'mongoose';


export interface ApiServiceTypeContract extends Document {

    name: string,
    tag: string,
    description: string

}