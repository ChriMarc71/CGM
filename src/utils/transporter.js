const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: 'smtp.office365.com',
  port: 587,
  secure: false,
  auth: {
    user: 'provaProgettoCGM@outlook.it',
    pass: 'CiaoCiao99',
  },
  tls : { rejectUnauthorized: false }
});

module.exports=transporter;
//user: 'provaProgettoCGM@outlook.it',
//pass: 'CiaoCiao99'