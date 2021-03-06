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
exports.InmueblesService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const inmuebles_entity_1 = require("./entities/inmuebles.entity");
const inmuebles_repository_1 = require("./inmuebles.repository");
const typeorm_2 = require("typeorm");
const usuarios_entity_1 = require("../usuarios/entities/usuarios.entity");
const usuarios_repository_1 = require("../usuarios/usuarios.repository");
let InmueblesService = class InmueblesService {
    constructor(inmuebleRepository, usuarioRepository) {
        this.inmuebleRepository = inmuebleRepository;
        this.usuarioRepository = usuarioRepository;
    }
    async findAll(limit, skip, operacion) {
        if (!operacion) {
            operacion = "%";
        }
        const inmueble = await this.inmuebleRepository.findAndCount({
            take: limit,
            skip: skip,
            where: {
                tipoOperacion: (0, typeorm_2.Like)('%' + operacion + '%')
            }
        });
        return inmueble;
    }
    async filter(ubicacion, opcion, tipo, precioMin, precioMax, habitaciones, banos, superficieMin, superficieMax, limit, skip) {
        if (!tipo) {
            tipo = "%";
        }
        if (!precioMin) {
            precioMin = 0;
        }
        if (!precioMax) {
            precioMax = Number.MAX_VALUE;
        }
        if (!superficieMin) {
            superficieMin = 0;
        }
        if (!superficieMax) {
            superficieMax = Number.MAX_VALUE;
        }
        if (!ubicacion) {
            ubicacion = "%";
        }
        if (!opcion) {
            opcion = "%";
        }
        if (!habitaciones) {
            habitaciones = 0;
        }
        if (!banos) {
            banos = 0;
        }
        const inmueble = await this.inmuebleRepository.findAndCount({
            where: {
                tipoInmueble: (0, typeorm_2.Like)('%' + tipo + '%'),
                precio: (0, typeorm_2.Between)(precioMin, precioMax),
                habitaciones: (0, typeorm_2.MoreThanOrEqual)(habitaciones),
                ba??os: (0, typeorm_2.MoreThanOrEqual)(banos),
                superficie: (0, typeorm_2.Between)(superficieMin, superficieMax),
                ubicacion: (0, typeorm_2.Like)('%' + ubicacion + '%'),
                tipoOperacion: (0, typeorm_2.Like)('%' + opcion + '%')
            },
            take: limit,
            skip: skip
        });
        return inmueble;
    }
    async findById(id) {
        const inmueble = await this.inmuebleRepository.findOne({
            where: {
                id: id
            }
        });
        return inmueble;
    }
    async findByUsuario(limit, skip, nombreUsuario) {
        const usuario = await this.usuarioRepository.findOne({
            where: {
                nombreUsuario: nombreUsuario
            }
        });
        if (!usuario)
            throw new common_1.BadRequestException({ message: 'Ese usuario no existe' });
        const inmueble = this.inmuebleRepository.findAndCount({
            where: {
                vendedor: nombreUsuario
            },
            take: limit,
            skip: skip
        });
        return inmueble;
    }
    async findByUbicacion(limit, skip, ubicacion, operacion) {
        if (!operacion) {
            operacion = "%";
        }
        const inmueble = this.inmuebleRepository.findAndCount({
            where: {
                ubicacion: ubicacion,
                tipoOperacion: (0, typeorm_2.Like)('%' + operacion + '%')
            },
            take: limit,
            skip: skip
        });
        return inmueble;
    }
    async create(nombreUsuario, data) {
        const usuario = this.usuarioRepository.findOne({
            where: {
                nombreUsuario: nombreUsuario
            }
        });
        if (!usuario)
            throw new common_1.BadRequestException({ message: 'Ese usuario no existe' });
        const newInmueble = this.inmuebleRepository.create(data);
        newInmueble.vendedor = await this.usuarioRepository.findOne({
            where: {
                nombreUsuario: nombreUsuario
            }
        });
        await this.inmuebleRepository.save(newInmueble);
        return newInmueble;
    }
    async update(id, data) {
        const inmueble = await this.inmuebleRepository.findOne({
            where: {
                id: id
            }
        });
        if (!inmueble)
            throw new common_1.BadRequestException({ message: 'Ese inmueble no existe' });
        if (data.ba??os) {
            inmueble.ba??os = data.ba??os;
        }
        if (data.descripcion) {
            inmueble.descripcion = data.descripcion;
        }
        if (data.habitaciones) {
            inmueble.habitaciones = data.habitaciones;
        }
        if (data.precio) {
            inmueble.precio = data.precio;
        }
        if (data.superficie) {
            inmueble.superficie = data.superficie;
        }
        if (data.tipoInmueble) {
            inmueble.tipoInmueble = data.tipoInmueble;
        }
        if (data.tipoOperacion) {
            inmueble.tipoOperacion = data.tipoOperacion;
        }
        if (data.ubicacion) {
            inmueble.ubicacion = data.ubicacion;
        }
        await this.inmuebleRepository.update({
            id: id
        }, {
            ba??os: inmueble.ba??os,
            descripcion: inmueble.descripcion,
            habitaciones: inmueble.habitaciones,
            precio: inmueble.precio,
            superficie: inmueble.superficie,
            tipoInmueble: inmueble.tipoInmueble,
            tipoOperacion: inmueble.tipoOperacion,
            ubicacion: inmueble.ubicacion
        });
        const listaInmuebles = await this.inmuebleRepository.findAndCount();
        return listaInmuebles;
    }
    async delete(id) {
        const inmueble = await this.inmuebleRepository.findOne({
            where: {
                id: id
            }
        });
        if (!inmueble)
            throw new common_1.BadRequestException({ message: 'Ese inmueble no existe' });
        await this.inmuebleRepository.delete({
            id: id
        });
        const listaInmuebles = await this.inmuebleRepository.findAndCount();
        return listaInmuebles;
    }
};
InmueblesService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(inmuebles_entity_1.InmueblesEntity)),
    __param(1, (0, typeorm_1.InjectRepository)(usuarios_entity_1.UsuariosEntity)),
    __metadata("design:paramtypes", [inmuebles_repository_1.InmueblesRepository,
        usuarios_repository_1.UsuariosRepository])
], InmueblesService);
exports.InmueblesService = InmueblesService;
//# sourceMappingURL=inmuebles.service.js.map