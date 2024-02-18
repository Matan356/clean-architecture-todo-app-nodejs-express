// app.js
require('module-alias/register');
require('dotenv').config();
const express = require('express');
const config = require('config');
const connect = require('./useCases/utils/connect');
const router = require('./routes');
const cors = require('cors');
const bodyParser = require('body-parser');


const port = config.get('port');
const host = config.get('host');
const protocol = config.get('protocol');

const app = express();

app.use(cors({
    origin: config.get('origin'),
    credentials: true
}));

app.use((req, res, next) => {
    logger.info(`METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
    next();
});

app.use(bodyParser.json({ limit: '15mb' }));

app.use(bodyParser.urlencoded({ limit: '15mb', extended: true }));

app.use(router);

app.listen(port, async () => {
    console.log(`App is running at ${protocol}://${host}:${port}`);
    await connect();
});