import { MailerService } from "@nestjs-modules/mailer";
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailsService {

    constructor(private mailerService: MailerService) {}

    async sendMailWelcome(email: string, name: string) {

        await this.mailerService.sendMail({
            to: email,
            subject: 'Creacion Usuario Golden Houses',
            template: '/emailBienvenida',
            context: {
                name: name,
            },
            attachments: [{
                filename: 'logo.png',
                path: __dirname + '/templates/logo.png',
                cid: 'logo'
            }]
        })
    }

    async sendMailPassword(email: string, name: string) {
        

        await this.mailerService.sendMail({
            to: email,
            subject: 'Recuperar Contraseña Golden Houses',
            template: '/emailContraseña',
            context: {
                name: name
            },
            attachments: [{
                filename: 'logo.png',
                path: __dirname + '/templates/logo.png',
                cid: 'logo'
            }]
        })
    }

    async sendMailForm(name: string, surname: string, email: string, reason: string, message: string) {
        

        await this.mailerService.sendMail({
            to: "gldhouses@gmail.com",
            subject: 'Formulario de Contacto',
            template: '/emailForm',
            context: {
                name: name,
                surname: surname,
                email: email,
                reason: reason,
                message: message
            },
            attachments: [{
                filename: 'logo.png',
                path: __dirname + '/templates/logo.png',
                cid: 'logo'
            }]
        })
    }
}
