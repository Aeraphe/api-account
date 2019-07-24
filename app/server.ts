import { App } from './app';
import * as https from 'https';
import * as fs from 'fs';

require('dotenv').config({ debug: process.env.DEBUG });
const PORT = process.env.PORT;
let app = new App().app;

const httpsOptions = {
    key: fs.readFileSync('./app/cert/key.pem'),
    cert: fs.readFileSync('./app/cert/cert.pem')
};

const server = https.createServer(httpsOptions, app);


server.listen(PORT, () => {
    console.log('\x1b[33m%s\x1b[0m', 'Express server listening ' + process.env.API_NAME + ' Https  on port ' + PORT);
});
