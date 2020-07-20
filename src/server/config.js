const nodemailer = require('nodemailer');
var transporter = nodemailer.createTransport({
  host: 'mail.privateemail.com',
  port: '993',
  auth: {
    user: 'abc@test.com', // your email address to send email from
    pass: 'password' // your gmail account password
  }
});

module.exports = transporter;