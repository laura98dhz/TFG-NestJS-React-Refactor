"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailsService = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const common_1 = require("@nestjs/common");
let MailsService = class MailsService {
    constructor(mailerService) {
        this.mailerService = mailerService;
    }
    async sendMailWelcome(email, name) {
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
        });
    }
    async sendMailPassword(email, name) {
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
        });
    }
    async sendMailForm(name, surname, email, reason, message) {
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
        });
    }
};
MailsService = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [mailer_1.MailerService])
], MailsService);
exports.MailsService = MailsService;
//# sourceMappingURL=mails.service.js.map