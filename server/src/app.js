// app.js
require('module-alias/register');
require('dotenv').config();
const express = require('express');
const config = require('config');
const connect = require('@/api/utils/connect');
const router = require('@/api/routes');
const cors = require('cors');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

const port = config.get('port');
const host = config.get('host');
const protocol = config.get('protocol');

const app = express();

app.use(helmet());

app.use(mongoSanitize());

app.use(xss());

app.use(compress());

app.use(fileUpload());

// secure apps by restrict to specific origins
app.use(restrictOrigins);

// secure apps by limit the call rate
app.use(rateLimiter);

app.use(
  cors({
    origin: config.get('origin'),
    credentials: true,
  })
);

app.use((req, res, next) => {
  console.info(`METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`);
  next();
});

app.use(bodyParser.json({ limit: '15mb' }));

app.use(bodyParser.urlencoded({ limit: '15mb', extended: true }));

app.use(router);

// if error is not an instanceOf APIError, convert it.
// app.use(error.converter);

// catch 404 and forward to error handler
// app.use(error.notFound);

// error handler, send stacktrace only during development
// app.use(error.handler);

app.listen(port, async () => {
  console.log(`App is running at ${protocol}://${host}:${port}`);
  await connect();
});
