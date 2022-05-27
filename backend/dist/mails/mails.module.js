"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MailsModule = void 0;
const mailer_1 = require("@nestjs-modules/mailer");
const handlebars_adapter_1 = require("@nestjs-modules/mailer/dist/adapters/handlebars.adapter");
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const config_service_1 = require("@nestjs/config/dist/config.service");
const path_1 = require("path");
const mails_controller_1 = require("./mails.controller");
const mails_service_1 = require("./mails.service");
let MailsModule = class MailsModule {
};
MailsModule = __decorate([
    (0, common_1.Module)({
        imports: [mailer_1.MailerModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (config) => ({
                    envFilePath: '.env',
                    transport: {
                        host: config.get('EMAIL_HOST'),
                        secure: true,
                        port: 465,
                        auth: {
                            user: config.get('EMAIL_USER'),
                            pass: config.get('EMAIL_PASSWORD'),
                        },
                    },
                    defaults: {
                        from: '<sendgrid_from_email_address>'
                    },
                    template: {
                        dir: (0, path_1.join)(__dirname, './templates'),
                        adapter: new handlebars_adapter_1.HandlebarsAdapter(),
                        options: {
                            strict: false
                        }
                    }
                }),
                inject: [config_service_1.ConfigService]
            })],
        providers: [mails_service_1.MailsService],
        controllers: [mails_controller_1.MailsController]
    })
], MailsModule);
exports.MailsModule = MailsModule;
//# sourceMappingURL=mails.module.js.map