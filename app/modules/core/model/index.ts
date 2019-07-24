import { Model, model } from 'mongoose';
import { AccountConfirmationSchema } from "./account-confirmation.schema";
import { AccountConfirmationContract } from "../contract/account-confirmation.contrac";
import { ApiServiceContract } from '../contract/api-service.contract';
import { childrenApiServiceSchema } from './account/children-api-service.schema';
import { CompanyContract } from '../contract/company.contract';
import { AccountSchema } from './account/account.schema';
import { AccountHasUserContract } from '../contract/account-has-user.contract';
import { AccountHasUserSchema } from './account-has-user.schema';
import { ApiServiceTypeContract } from '../contract/api-service-type.contract';
import { ApiServiceTypeSchema } from './api-service-type.schema';
import { AccountContract } from '../contract/account.contrat';
import { CompanySchema } from './company.schema';
import { IUserModel } from '../contract/user.model.inderface';
import { UserSchema } from './user.schema';


export const AccountConfirmationModel: Model<AccountConfirmationContract> = model<AccountConfirmationContract>(
    'account-confirmations',
    AccountConfirmationSchema
);

export const childrenApiServiceModel: Model<ApiServiceContract> = model<ApiServiceContract>(
    'api-services',
    childrenApiServiceSchema
);

export const AccountModel: Model<AccountContract> = model<AccountContract>(
    'accounts',
    AccountSchema
);

export const AccountHasUserModel: Model<AccountHasUserContract> = model<AccountHasUserContract>(
    'account-has-users',
    AccountHasUserSchema
);

export const ApiServiceTypeModel: Model<ApiServiceTypeContract> = model<ApiServiceTypeContract>(
    'api-service-types',
    ApiServiceTypeSchema
);

export const Company: Model<CompanyContract> = model<CompanyContract>(
    'companies',
    CompanySchema
);

export const User: Model<IUserModel> = model<IUserModel>(
    'users',
    UserSchema
);
