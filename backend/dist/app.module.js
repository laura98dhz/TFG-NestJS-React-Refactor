"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AppModule = void 0;
const common_1 = require("@nestjs/common");
const config_1 = require("@nestjs/config");
const typeorm_1 = require("@nestjs/typeorm");
const app_controller_1 = require("./app.controller");
const app_service_1 = require("./app.service");
const usuarios_module_1 = require("./usuarios/usuarios.module");
const inmuebles_module_1 = require("./inmuebles/inmuebles.module");
const imagenes_module_1 = require("./imagenes/imagenes.module");
const mails_controller_1 = require("./mails/mails.controller");
const mails_service_1 = require("./mails/mails.service");
const mails_module_1 = require("./mails/mails.module");
let AppModule = class AppModule {
};
AppModule = __decorate([
    (0, common_1.Global)(),
    (0, common_1.Module)({
        imports: [
            config_1.ConfigModule.forRoot({
                envFilePath: '.env',
                isGlobal: true
            }),
            typeorm_1.TypeOrmModule.forRootAsync({
                imports: [config_1.ConfigModule],
                useFactory: (configService) => ({
                    type: 'mysql',
                    host: configService.get('DB_HOST'),
                    port: +configService.get('DB_PORT'),
                    username: configService.get('DB_USER'),
                    password: configService.get('DB_PASSWORD'),
                    database: configService.get('DB_DATABASE'),
                    entities: [__dirname + '/**/*.entity{.ts,.js}'],
                    synchronize: false,
                    logging: false
                }),
                inject: [config_1.ConfigService],
            }),
            config_1.ConfigModule.forRoot(),
            usuarios_module_1.UsuariosModule,
            inmuebles_module_1.InmueblesModule,
            imagenes_module_1.ImagenesModule,
            mails_module_1.MailsModule,
        ],
        controllers: [app_controller_1.AppController, mails_controller_1.MailsController],
        providers: [app_service_1.AppService, mails_service_1.MailsService],
    })
], AppModule);
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map