import { Document } from 'mongoose';

export interface CompanyContract extends Document {
    name: string;
    address: [
        {
            state: string;
            city: string;
            street: string;
            number: number;
        }
    ];
    cellphones?: [{ ddd?: string; number?: string; category?: string }];
}
