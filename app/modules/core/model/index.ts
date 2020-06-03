import { Model, model } from 'mongoose';
import { ApiServiceContract } from '../contract/api-service.contract';
import { CompanyContract } from '../contract/company.contract';
import { StoreContract } from '../contract/store.contract';
import { StoreSchema } from './store.schema';
import { ApiServiceSchema } from './api-service.schema';
import { CompanySchema } from './company.schema';
import { UserSchema } from './user.schema';
import { UserContract } from '../contract/user.contract'



export const StoreModel: Model<StoreContract> = model<StoreContract>(
    'stores',
    StoreSchema
);

export const ApiServiceModel: Model<ApiServiceContract> = model<ApiServiceContract>(
    'api-services',
    ApiServiceSchema
);

export const CompanyModel: Model<CompanyContract> = model<CompanyContract>(
    'companies',
    CompanySchema
);

export const UserModel: Model<UserContract> = model<UserContract>(
    'users',
    UserSchema
);
