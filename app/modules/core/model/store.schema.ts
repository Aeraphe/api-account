import {  Schema} from 'mongoose';


export const StoreSchema: Schema = new Schema({

    company_id: {type: Schema.Types.ObjectId,ref:"company"},
    name: {type:String,default:"New Store"},
    employees:[{_id:{type:Schema.Types.ObjectId,ref:'user'},role:String}],
    api: [{ _id: {type:Schema.Types.ObjectId,ref:'api'}, tag: String,qt:Number }],
    created_at: { type: Date, default: Date.now }
});


