import { Document } from 'mongoose';
import { UserContract } from '../user.contract';
import { AccountContract } from '../account.contract';
import {ApiServiceTypeContract} from '../api-service-type.contract';

export interface UserDocument extends UserContract, Document {}
export interface AccountDocument extends AccountContract, Document { }

export interface ApiServiceTypeDocument extends ApiServiceTypeContract, Document { }