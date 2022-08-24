import nodemailer from 'nodemailer';
import { ServerError } from './custom-errors.js';

const transporter = nodemailer.createTransport({
     service: 'gmail',
     host: 'smtp.gmail.com',
     port: 587,
     secure: false,
     auth: {
          user: 'mihranyan.edgar1997@gmail.com',
          pass: 'dbpwwasfuqjufybf',
     },
});
export const messageMail = (subject, to, token) => ({
     from: 'mihranyan.edgar1997@gmail.com',
     to,
     subject,
     html: `Your token -> ${token}`,
});
export const mailer = async (message) => {
     try {
          await transporter.sendMail(message);
     } catch (err) {
          throw new ServerError(400, 'Email', 'Email address error');
     }
};
