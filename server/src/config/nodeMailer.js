const nodemailer = require('nodemailer');
const { mailer } = require('./vars');

const noop = () => {};

const transporter = nodemailer.createTransport({
  host: mailer.host,
  port: mailer.port,
  secure: (mailer.secure === 'true'), // true for 465, false for other ports
  auth: {
    user: mailer.user,
    pass: mailer.pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

/**
 * Attach custom send function to nodemailer to handle simple email send
 * @param {custom} options custom. can be full nodemailer options or only html
 * @param {string} subject email subject
 * @param {function} cb callback function
 */
transporter.deliver = (options = {}, subject = '', cb = noop) => {
  let mailOptions = {
    from: mailer.from,
    to: mailer.to,
  };

  // when options is string use it as html and add subject
  if (typeof options === 'string') {
    mailOptions.html = options;
    mailOptions.subject = (subject.length) ? subject : 'empty subject';
  } else {
    mailOptions = {
      ...mailOptions,
      ...options,
    };
  }

  return transporter.sendMail(mailOptions, cb);
};

module.exports = transporter;
