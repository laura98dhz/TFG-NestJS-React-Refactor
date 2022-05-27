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
exports.ImagenesEntity = void 0;
const inmuebles_entity_1 = require("../../inmuebles/entities/inmuebles.entity");
const typeorm_1 = require("typeorm");
let ImagenesEntity = class ImagenesEntity {
};
__decorate([
    (0, typeorm_1.PrimaryGeneratedColumn)(),
    __metadata("design:type", Number)
], ImagenesEntity.prototype, "id", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], ImagenesEntity.prototype, "nombre", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: 'varchar', nullable: false }),
    __metadata("design:type", String)
], ImagenesEntity.prototype, "tipo", void 0);
__decorate([
    (0, typeorm_1.Column)({ type: "longblob", nullable: false }),
    __metadata("design:type", String)
], ImagenesEntity.prototype, "data", void 0);
__decorate([
    (0, typeorm_1.ManyToOne)(() => inmuebles_entity_1.InmueblesEntity, (inmueblesEntity) => inmueblesEntity.id, {
        onDelete: "CASCADE",
        onUpdate: "CASCADE"
    }),
    (0, typeorm_1.JoinColumn)({ name: 'inmueble_id' }),
    __metadata("design:type", inmuebles_entity_1.InmueblesEntity)
], ImagenesEntity.prototype, "inmueble_id", void 0);
ImagenesEntity = __decorate([
    (0, typeorm_1.Entity)({ name: 'Imagenes' })
], ImagenesEntity);
exports.ImagenesEntity = ImagenesEntity;
//# sourceMappingURL=imagenes.entity.js.map