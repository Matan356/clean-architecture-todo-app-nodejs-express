const express = require('express');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');
const compress = require('compression');
const methodOverride = require('method-override');
const cors = require('cors');
const helmet = require('helmet');
// const passport = require('passport');
// const passportStrategies = require('./passport');
const routes = require('../api/routes/v1');
const { log } = require('./vars');
const error = require('../api/middlewares/error');
const restrictOrigins = require('../api/middlewares/restrictOrigin');
const rateLimiter = require('../api/middlewares/rateLimiter');

/**
* Express instance
* @public
*/
const app = express();

// request logging. dev: console | production: file
app.use(morgan(log.name));

// parse body params and attach them to req.body
app.use(bodyParser.json({ limit: '50mb' }));
app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));
app.use(fileUpload());
// gzip compression
app.use(compress());

// lets you use HTTP verbs such as PUT or DELETE in places where the client doesn't support it
app.use(methodOverride());

// secure apps by setting various HTTP headers
app.use(helmet());

// enable CORS - Cross Origin Resource Sharing
app.use(cors());

// enable authentication
// app.use(passport.initialize());
// passport.use('jwt', passportStrategies.jwt);

// secure apps by restrict to specific origins
app.use(restrictOrigins);

// secure apps by limit the call rate
app.use(rateLimiter);

// mount api v1 routes
app.use('/v1', routes);

// if error is not an instanceOf APIError, convert it.
app.use(error.converter);

// catch 404 and forward to error handler
app.use(error.notFound);

// error handler, send stacktrace only during development
app.use(error.handler);

module.exports = app;
