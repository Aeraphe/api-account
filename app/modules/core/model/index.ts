import { Model, model } from 'mongoose';
import { ApiServiceContract } from '../contract/api-service.contract';
import { CompanyContract } from '../contract/company.contract';
import { StoreHasUserContract } from '../contract/store-has-company.contract';
import { StoreHasUserSchema } from './store -has-user.schema';
import { ApiServiceSchema } from './api-service.schema';
import { CompanySchema } from './company.schema';
import { UserSchema } from './user.schema';
import { UserContract } from '../contract/user.contract'



export const AccountHasUserModel: Model<StoreHasUserContract> = model<StoreHasUserContract>(
    'store-has-company',
    StoreHasUserSchema
);

export const ApiServiceTypeModel: Model<ApiServiceContract> = model<ApiServiceContract>(
    'api-services',
    ApiServiceSchema
);

export const Company: Model<CompanyContract> = model<CompanyContract>(
    'companies',
    CompanySchema
);

export const User: Model<UserContract> = model<UserContract>(
    'users',
    UserSchema
);
