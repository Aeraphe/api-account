import * as mongoose from 'mongoose';
import { BehaviorSubject } from 'rxjs';
require('dotenv').config({ debug: process.env.DEBUG });

class MongoDb {
    public db: any;

    private setDb = new BehaviorSubject(undefined);

    constructor() { }

    getDb() {
        return this.setDb.asObservable();
    }

    public async connect(): Promise<any> {
        try {
            this.db = await mongoose.connect(
                process.env.DATABASE,
                {

                    useNewUrlParser: true,

                }
            );
            console.log('Connected to db ' + process.env.API_NAME, new Date());
            this.setDb.next(this.db);
            return this.db;
        } catch (error) {
            console.log('Unable to connect to db', error);
        }
    }
}

export default new MongoDb();
