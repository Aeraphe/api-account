import { Schema, Model } from 'mongoose';
import * as mongoose from 'mongoose';
import { IUserModel } from '../contract/user.model.inderface';
import * as bcrypt from 'bcrypt';


export const UserSchema: Schema = new Schema({
    name: {
        type: String,
        required: 'Favor digitar seu nome'
    },
    email: { type: String, required: 'Email' },
    password: String,
    address: [
        {
            state: String,
            street: String,
            number: Number
        }
    ],
    cellphones: [{ dd: String, number: String }],
    created_at: { type: Date, default: Date.now },
    trash: { type: Number, default: 0 }
});
/**
 * Check user password
 */
UserSchema.methods.checkPassword = async (
    pass: string,
    userPass: string,
    can: Function
) => {
    await bcrypt.compare(pass, userPass, (error, same) => {
        if (error) throw error;
        console.log('Loggin', same);

        return same;
    });
};

