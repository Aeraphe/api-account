import {  Document } from 'mongoose';
export interface IUserModel extends Document {
    name: string;
    email: string;
    password: string;
    address: [
        {
            state: string;
            street: string;
            number: number;
        }
    ];
    cellphones: [{ dd: string; number: number }];
    projecs: [
        {
            id: string;
            permisson: number;
            jobs: [{ sector: string; position: string; degree: string }];
        }
    ];
    roles: [];

    checkPassword:Function;
  
}
