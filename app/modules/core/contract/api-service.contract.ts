import { Document } from 'mongoose';

export interface ApiServiceContract extends Document {

    name: string,
    tag: string,
    description: string,

}