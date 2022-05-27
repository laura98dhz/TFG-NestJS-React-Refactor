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
    async findAll() {
        const usuarios = await this.inmuebleRepository.createQueryBuilder("inmueble").getMany();
        return usuarios;
    }
    async findById(id) {
        const inmueble = await this.inmuebleRepository.findOne({
            where: {
                id: id
            }
        });
        return inmueble;
    }
    async findByUsuario(nombreUsuario) {
        const usuario = await (0, typeorm_2.getRepository)('UsuariosEntity').createQueryBuilder("usuario").where("usuario.nombreUsuario = :nombreUsuario", { nombreUsuario: nombreUsuario }).getOne();
        if (!usuario)
            throw new common_1.BadRequestException({ message: 'Ese usuario no existe' });
        const inmueble = this.inmuebleRepository.find({
            where: {
                vendedor: nombreUsuario
            }
        });
        return inmueble;
    }
    async filterByTipo(tipoInmueble) {
        const inmueble = this.inmuebleRepository.find({
            where: {
                tipoInmueble: tipoInmueble.tipoInmueble
            }
        });
        return inmueble;
    }
    async filterByPrecio(precio) {
        var inmueble = {};
        if (precio.precioMin === undefined) {
            inmueble = this.inmuebleRepository.find({
                precio: (0, typeorm_2.LessThanOrEqual)(precio.precioMax)
            });
        }
        else if (precio.precioMax === undefined) {
            inmueble = this.inmuebleRepository.find({
                precio: (0, typeorm_2.MoreThanOrEqual)(precio.precioMin)
            });
        }
        else {
            inmueble = this.inmuebleRepository.find({
                precio: (0, typeorm_2.Between)(precio.precioMin, precio.precioMax)
            });
        }
        return inmueble;
    }
    async filterByHabitaciones(habitaciones) {
        const inmueble = this.inmuebleRepository.find({
            where: {
                habitaciones: habitaciones.habitaciones
            }
        });
        return inmueble;
    }
    async filterByBaños(baños) {
        const inmueble = this.inmuebleRepository.find({
            where: {
                baños: baños.baños
            }
        });
        return inmueble;
    }
    async filterBySuperficie(superficie) {
        var inmueble = {};
        if (superficie.superficieMin === undefined) {
            inmueble = this.inmuebleRepository.find({
                precio: (0, typeorm_2.LessThanOrEqual)(superficie.superficieMax)
            });
        }
        else if (superficie.superficieMax === undefined) {
            inmueble = this.inmuebleRepository.find({
                precio: (0, typeorm_2.MoreThanOrEqual)(superficie.superficieMin)
            });
        }
        else {
            inmueble = this.inmuebleRepository.find({
                precio: (0, typeorm_2.Between)(superficie.superficieMin, superficie.superficieMax)
            });
        }
        return inmueble;
    }
    async findByUbicacion(ubicacion) {
        const inmueble = this.inmuebleRepository.find({
            where: {
                ubicacion: ubicacion
            },
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
        if (data.baños) {
            inmueble.baños = data.baños;
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
            baños: inmueble.baños,
            descripcion: inmueble.descripcion,
            habitaciones: inmueble.habitaciones,
            precio: inmueble.precio,
            superficie: inmueble.superficie,
            tipoInmueble: inmueble.tipoInmueble,
            tipoOperacion: inmueble.tipoOperacion,
            ubicacion: inmueble.ubicacion
        });
        return { message: 'usuario modificado' };
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
        return { message: 'inmueble eliminado' };
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