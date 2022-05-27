import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { ConfigService } from '@nestjs/config/dist/config.service';
import { join } from 'path';
import { MailsController } from './mails.controller';
import { MailsService } from './mails.service';

@Module({
    imports:[MailerModule.forRootAsync({
        imports: [ConfigModule],
        useFactory: async (config: ConfigService) => ({
            envFilePath: '.env', //fichero con las variables globales
            transport: {
            host: config.get('EMAIL_HOST'),
            secure: true,
            port:465,
            auth: {
              user: config.get('EMAIL_USER'),
              pass: config.get('EMAIL_PASSWORD'),
            },
          },
          defaults: {
            from: '<sendgrid_from_email_address>'
          },
          template: {
            dir: join(__dirname, './templates'),
            adapter: new HandlebarsAdapter(),
            options: {
              strict: false
            }
          }
        }),
        inject: [ConfigService]
      })],
    providers: [MailsService],
    controllers: [MailsController]
})

export class MailsModule {}
