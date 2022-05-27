import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsuariosModule } from './usuarios/usuarios.module';
import { InmueblesModule } from './inmuebles/inmuebles.module';
import { ImagenesController } from './imagenes/imagenes.controller';
import { ImagenesService } from './imagenes/imagenes.service';
import { ImagenesModule } from './imagenes/imagenes.module';
import { MailerModule } from '@nestjs-modules/mailer';
import { HandlebarsAdapter } from '@nestjs-modules/mailer/dist/adapters/handlebars.adapter';
import { join } from 'path';
import { MailsController } from './mails/mails.controller';
import { MailsService } from './mails/mails.service';
import { MailsModule } from './mails/mails.module';

@Global()
@Module({
  imports: [
    ConfigModule.forRoot({
      envFilePath: '.env', //fichero con las variables globales
      isGlobal: true // para que se reconozcan las variables globalmente en todo el proyecto
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: 'mysql',
        host: configService.get<string>('DB_HOST'),
        port: +configService.get<number>('DB_PORT'),
        username: configService.get<string>('DB_USER'),
        password: configService.get<string>('DB_PASSWORD'),
        database: configService.get<string>('DB_DATABASE'),
        entities: [__dirname + '/**/*.entity{.ts,.js}'],
        synchronize: false,
        logging: false //para crear las tablas
      }),
      inject: [ConfigService],
    }),
  ConfigModule.forRoot(),
    UsuariosModule,
    InmueblesModule,
    ImagenesModule,
    MailsModule,
  ],
  controllers: [AppController, ImagenesController, MailsController],
  providers: [AppService, ImagenesService, MailsService],
})
export class AppModule { }
