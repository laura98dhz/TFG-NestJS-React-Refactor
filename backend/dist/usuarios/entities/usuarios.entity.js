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
exports.UsuariosEntity = void 0;
const inmuebles_entity_1 = require("../../inmuebles/entities/inmuebles.entity");
const typeorm_1 = require("typeorm");
let UsuariosEntity = class UsuariosEntity {
};
__decorate([
    (0, typeorm_1.PrimaryColumn)(),
    __metadata("design:type", String)
], UsuariosEntity.prototype, "nombreUsuario", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 100, nullable: false }),
    __metadata("design:type", String)
], UsuariosEntity.prototype, "contrase\u00F1a", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], UsuariosEntity.prototype, "correo", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => inmuebles_entity_1.InmueblesEntity, (inmuebleEntity) => inmuebleEntity.vendedor),
    __metadata("design:type", Array)
], UsuariosEntity.prototype, "inmuebles", void 0);
UsuariosEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'usuarios' })
], UsuariosEntity);
exports.UsuariosEntity = UsuariosEntity;
//# sourceMappingURL=usuarios.entity.js.map