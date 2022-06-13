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
exports.UsuariosService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const usuarios_entity_1 = require("./entities/usuarios.entity");
const usuarios_repository_1 = require("./usuarios.repository");
const bcrypt = require("bcryptjs");
let UsuariosService = class UsuariosService {
    constructor(usuarioRepository) {
        this.usuarioRepository = usuarioRepository;
    }
    async findAll() {
        const usuarios = await this.usuarioRepository.createQueryBuilder("usuario").getMany();
        if (!usuarios.length) {
            throw new common_1.NotFoundException({ message: 'No hay usuarios' });
        }
        return usuarios;
    }
    async findByNombre(nombreUsuario) {
        const usuario = await this.usuarioRepository.findOne({
            where: {
                nombreUsuario: nombreUsuario
            }
        });
        if (!usuario)
            throw new common_1.NotFoundException({ message: 'Usuario Incorrecto' });
        return usuario;
    }
    async findByEmail(correo) {
        const usuario = await this.usuarioRepository.findOne({
            where: {
                correo: correo
            }
        });
        if (!usuario) {
            throw new common_1.NotFoundException({ message: 'No hay usuario' });
        }
        return usuario;
    }
    async comprobarPassword(usser) {
        const usuario = await this.usuarioRepository.findOne({
            where: {
                nombreUsuario: usser.nombreUsuario,
            }
        });
        if (!usuario) {
            throw new common_1.NotFoundException({ message: 'No hay usuario' });
        }
        const isMatch = await bcrypt.compare(usser.contraseña, usuario.contraseña);
        return isMatch;
    }
    async create(data) {
        const exists = await this.usuarioRepository.findOne({
            where: {
                nombreUsuario: data.nombreUsuario
            }
        });
        if (exists)
            throw new common_1.BadRequestException({ message: 'Ese usuario ya existe' });
        const contraseñaHash = await bcrypt.hash(data.contraseña, 10);
        data.contraseña = contraseñaHash;
        const newUsuario = this.usuarioRepository.create(data);
        await this.usuarioRepository.save(newUsuario);
        return newUsuario;
    }
    async update(nombreUsuario, data) {
        const usuario = await this.usuarioRepository.findOne({
            where: {
                nombreUsuario: nombreUsuario
            }
        });
        if (!usuario)
            throw new common_1.BadRequestException({ message: 'Ese nombre de usuario ya existe' });
        if (data.nombreUsuario && data.nombreUsuario !== '') {
            usuario.nombreUsuario = data.nombreUsuario;
        }
        if (data.contraseña === usuario.contraseña) {
            usuario.contraseña = data.contraseña;
        }
        else {
            const contraseñaHash = await bcrypt.hash(data.contraseña, 10);
            data.contraseña = contraseñaHash;
            usuario.contraseña = data.contraseña;
        }
        if (data.correo && data.correo !== '') {
            usuario.correo = data.correo;
        }
        await this.usuarioRepository.update({
            nombreUsuario: nombreUsuario
        }, {
            nombreUsuario: usuario.nombreUsuario,
            contraseña: usuario.contraseña,
            correo: usuario.correo
        });
        return usuario;
    }
    async delete(nombreUsuario) {
        const usuario = await this.findByNombre(nombreUsuario);
        if (!usuario)
            throw new common_1.BadRequestException({ message: 'Ese usuario no existe' });
        await this.usuarioRepository.delete({
            nombreUsuario: nombreUsuario
        });
        return { message: 'usuario eliminado' };
    }
};
UsuariosService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(usuarios_entity_1.UsuariosEntity)),
    __metadata("design:paramtypes", [usuarios_repository_1.UsuariosRepository])
], UsuariosService);
exports.UsuariosService = UsuariosService;
//# sourceMappingURL=usuarios.service.js.map