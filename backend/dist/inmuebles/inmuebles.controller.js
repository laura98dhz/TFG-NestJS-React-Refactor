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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.InmueblesController = void 0;
const common_1 = require("@nestjs/common");
const inmuebles_service_1 = require("./inmuebles.service");
const create_inmueble_dto_1 = require("./dto/create-inmueble.dto");
const update_inmueble_dto_1 = require("./dto/update-inmueble.dto");
let InmueblesController = class InmueblesController {
    constructor(inmueblesService) {
        this.inmueblesService = inmueblesService;
    }
    findAll(limit, skip) {
        return this.inmueblesService.findAll(limit, skip);
    }
    filterByTipo(tipoInmueble) {
        return this.inmueblesService.filterByTipo(tipoInmueble);
    }
    filterByPrecio(precio) {
        return this.inmueblesService.filterByPrecio(precio);
    }
    filterByHabitaciones(habitaciones) {
        return this.inmueblesService.filterByHabitaciones(habitaciones);
    }
    filterByBaños(baños) {
        return this.inmueblesService.filterByBaños(baños);
    }
    filterBySuperficie(superficie) {
        return this.inmueblesService.filterBySuperficie(superficie);
    }
    findByUsuario(limit, skip, usuario) {
        return this.inmueblesService.findByUsuario(limit, skip, usuario);
    }
    findById(id) {
        return this.inmueblesService.findById(id);
    }
    findByUbicacion(limit, skip, ubicacion) {
        return this.inmueblesService.findByUbicacion(limit, skip, ubicacion);
    }
    create(vendedor, data) {
        return this.inmueblesService.create(vendedor, data);
    }
    update(id, data) {
        return this.inmueblesService.update(id, data);
    }
    remove(id) {
        return this.inmueblesService.delete(id);
    }
};
__decorate([
    (0, common_1.Get)('/getAll'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)('limit')),
    __param(1, (0, common_1.Query)('skip')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", void 0)
], InmueblesController.prototype, "findAll", null);
__decorate([
    (0, common_1.Get)('/tipoInmueble'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_inmueble_dto_1.CreateInmuebleDto]),
    __metadata("design:returntype", void 0)
], InmueblesController.prototype, "filterByTipo", null);
__decorate([
    (0, common_1.Get)('/precio'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InmueblesController.prototype, "filterByPrecio", null);
__decorate([
    (0, common_1.Get)('/habitaciones'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_inmueble_dto_1.CreateInmuebleDto]),
    __metadata("design:returntype", void 0)
], InmueblesController.prototype, "filterByHabitaciones", null);
__decorate([
    (0, common_1.Get)('/banos'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [create_inmueble_dto_1.CreateInmuebleDto]),
    __metadata("design:returntype", void 0)
], InmueblesController.prototype, "filterByBa\u00F1os", null);
__decorate([
    (0, common_1.Get)('/superficie'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], InmueblesController.prototype, "filterBySuperficie", null);
__decorate([
    (0, common_1.Get)('/mostrar/:usuario'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)('limit')),
    __param(1, (0, common_1.Query)('skip')),
    __param(2, (0, common_1.Param)('usuario')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", void 0)
], InmueblesController.prototype, "findByUsuario", null);
__decorate([
    (0, common_1.Get)('/id/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InmueblesController.prototype, "findById", null);
__decorate([
    (0, common_1.Get)(':ubicacion'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Query)('limit')),
    __param(1, (0, common_1.Query)('skip')),
    __param(2, (0, common_1.Param)('ubicacion')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number, String]),
    __metadata("design:returntype", void 0)
], InmueblesController.prototype, "findByUbicacion", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    (0, common_1.Post)('/:vendedor'),
    (0, common_1.HttpCode)(common_1.HttpStatus.CREATED),
    __param(0, (0, common_1.Param)('vendedor')),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [String, create_inmueble_dto_1.CreateInmuebleDto]),
    __metadata("design:returntype", void 0)
], InmueblesController.prototype, "create", null);
__decorate([
    (0, common_1.UsePipes)(new common_1.ValidationPipe({ whitelist: true })),
    (0, common_1.Put)('/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, update_inmueble_dto_1.UpdateInmuebleDto]),
    __metadata("design:returntype", void 0)
], InmueblesController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)('/:id'),
    (0, common_1.HttpCode)(common_1.HttpStatus.OK),
    __param(0, (0, common_1.Param)('id', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", void 0)
], InmueblesController.prototype, "remove", null);
InmueblesController = __decorate([
    (0, common_1.Controller)('inmuebles'),
    __metadata("design:paramtypes", [inmuebles_service_1.InmueblesService])
], InmueblesController);
exports.InmueblesController = InmueblesController;
//# sourceMappingURL=inmuebles.controller.js.map