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
exports.InmueblesEntity = void 0;
const usuarios_entity_1 = require("../../usuarios/entities/usuarios.entity");
const imagenes_entity_1 = require("../../imagenes/entities/imagenes.entity");
const typeorm_1 = require("typeorm");
let InmueblesEntity = class InmueblesEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], InmueblesEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 15, nullable: false }),
    __metadata("design:type", String)
], InmueblesEntity.prototype, "ubicacion", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 15, nullable: false }),
    __metadata("design:type", String)
], InmueblesEntity.prototype, "tipoInmueble", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 15, nullable: false }),
    __metadata("design:type", String)
], InmueblesEntity.prototype, "tipoOperacion", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => usuarios_entity_1.UsuariosEntity, (usuariosEntity) => usuariosEntity.nombreUsuario, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    }),
    (0, typeorm_1.JoinColumn)({ name: "nombreVendedor" }),
    __metadata("design:type", usuarios_entity_1.UsuariosEntity)
], InmueblesEntity.prototype, "vendedor", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false }),
    __metadata("design:type", Number)
], InmueblesEntity.prototype, "superficie", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false }),
    __metadata("design:type", Number)
], InmueblesEntity.prototype, "habitaciones", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false }),
    __metadata("design:type", Number)
], InmueblesEntity.prototype, "ba\u00F1os", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'int', nullable: false }),
    __metadata("design:type", Number)
], InmueblesEntity.prototype, "precio", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', length: 15, nullable: false }),
    __metadata("design:type", String)
], InmueblesEntity.prototype, "descripcion", void 0);
__decorate([
    (0, typeorm_1.OneToMany)(() => imagenes_entity_1.ImagenesEntity, (imagenesEntity) => imagenesEntity.inmueble_id),
    __metadata("design:type", Array)
], InmueblesEntity.prototype, "imagenes", void 0);
InmueblesEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'Inmuebles' })
], InmueblesEntity);
exports.InmueblesEntity = InmueblesEntity;
//# sourceMappingURL=inmuebles.entity.js.map