"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InmueblesModule = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const usuarios_entity_1 = require("../usuarios/entities/usuarios.entity");
const inmuebles_entity_1 = require("./entities/inmuebles.entity");
const inmuebles_controller_1 = require("./inmuebles.controller");
const inmuebles_service_1 = require("./inmuebles.service");
let InmueblesModule = class InmueblesModule {
};
InmueblesModule = __decorate([
    (0, common_1.Module)({
        imports: [typeorm_1.TypeOrmModule.forFeature([inmuebles_entity_1.InmueblesEntity]), typeorm_1.TypeOrmModule.forFeature([usuarios_entity_1.UsuariosEntity])],
        providers: [inmuebles_service_1.InmueblesService],
        controllers: [inmuebles_controller_1.InmueblesController]
    })
], InmueblesModule);
exports.InmueblesModule = InmueblesModule;
//# sourceMappingURL=inmuebles.module.js.map