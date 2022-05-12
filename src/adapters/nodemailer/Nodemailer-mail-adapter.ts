import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "6dcba3ac934b6f",
      pass: "e68b3a9e11a015"
    }
  });

export class NodemailerMailAdapter implements MailAdapter {
 async sendMail({subject, body}: SendMailData){
        await transport.sendMail({
        from: 'Equipe Feedget <oi@feedget.com>',
        to: 'Carlos Uzeda <carlosuzeda17@gmail.com>',
        subject,
        html: body,
    }) 
 }
}