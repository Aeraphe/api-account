import { Document } from 'mongoose';
import { UserContract } from '../user.contract';
import { AccountContract } from '../account.contract';


export interface UserDocument extends UserContract, Document {}
export interface AccountDcoument extends AccountContract, Document { }