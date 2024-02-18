const winston = require('winston');
const SqlTransport = require('./winston-sql-transport');
const { sql, log, name } = require('./vars');

const labels = {
  request: 'REQUEST',
  response: 'RESPONSE',
  error: 'ERROR',
  mail: 'MAIL',
  sql: 'SQL',
  misc: 'MISC',
  auth: 'AUTH',
};

const sqlTransporterConfig = {
  connection: {
    user: sql.user,
    port: +sql.port,
    password: sql.password,
    server: sql.server,
    database: log.database,
  },
  defaultMeta: {
    id: name,
    label: labels.misc,
  },
  table: log.table,
};

const logger = winston.createLogger({
  level: 'info',
  format: winston.format.json(),
  transports: [
    //
    // - Write to all logs with level `info` and below to `combined.log`
    // - Write all logs error (and below) to `error.log`.
    //
    new winston.transports.File({ filename: 'error.log', level: 'error' }),
    new winston.transports.File({ filename: 'combined.log' }),
  ],
});

//
// If we're not in production then log to the `console` with the format:
// `${info.level}: ${info.message} JSON.stringify({ ...rest }) `
//
if (process.env.NODE_ENV !== 'production') {
  logger.add(new winston.transports.Console({
    format: winston.format.simple(),
  }));
}

//
// If we're not in development than log to sql
//
if (process.env.NODE_ENV !== 'development') {
  logger.add(new SqlTransport(sqlTransporterConfig));
}

logger.stream = {
  write: (message) => {
    logger.info(message.trim());
  },
};

logger.labels = labels;

module.exports = logger;
