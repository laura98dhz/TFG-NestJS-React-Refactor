import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUsuarioDto } from './dto/create-usuarios.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuariosEntity } from './entities/usuarios.entity';
import { UsuariosRepository } from './usuarios.repository';
//import * as bcrypt from 'bcrypt';
import * as bcrypt from 'bcryptjs';


@Injectable()
export class UsuariosService {

    constructor(
        @InjectRepository(UsuariosEntity) private usuarioRepository: UsuariosRepository
    ) { }

    async findAll(): Promise<any> {
        const usuarios = await this.usuarioRepository.createQueryBuilder("usuario").getMany();

        if (!usuarios.length) {
            throw new NotFoundException({ message: 'No hay usuarios' })
        }
        return usuarios;
    }

    async findByNombre(nombreUsuario: string): Promise<any> {
        const usuario = await this.usuarioRepository.findOne({
            where: {
                nombreUsuario: nombreUsuario
            }
        });
        if(!usuario) throw new NotFoundException({ message: 'Usuario Incorrecto' });

        return usuario;
    }

    async findByEmail(correo: string): Promise<any> {
        const usuario = await this.usuarioRepository.findOne({
            where: {
                correo: correo
            }
        });
        
        if (!usuario) {
            throw new NotFoundException({ message: 'No hay usuario' })
        }
        return usuario;
    }

    async comprobarPassword(usser: UpdateUsuarioDto): Promise<any> {
        const usuario = await this.usuarioRepository.findOne({
            where: {
                nombreUsuario: usser.nombreUsuario,
            }
        });

        if (!usuario) {
            throw new NotFoundException({ message: 'No hay usuario' })
        }
        const isMatch = await bcrypt.compare(usser.contraseña, usuario.contraseña);
        
        return isMatch;
    }

    async create(data: CreateUsuarioDto): Promise<any> {
        
        const exists = await this.findByNombre(data.nombreUsuario);


        if(exists) throw new BadRequestException({message: 'Ese usuario ya existe'}) 
        
        const contraseñaHash = await bcrypt.hash(data.contraseña, 10);
        data.contraseña = contraseñaHash; 
        const newUsuario = this.usuarioRepository.create(data);
        await this.usuarioRepository.save(newUsuario);
        return newUsuario;
    }

    async update(nombreUsuario: string, data: UpdateUsuarioDto): Promise<any>{
        const usuario = await this.findByNombre(nombreUsuario);

        if(!usuario) throw new BadRequestException({message: 'Ese nombre de usuario ya existe'})
        
        if(data.nombreUsuario) {
            usuario.nombreUsuario = data.nombreUsuario;        
        }

        if(data.contraseña) {
            const contraseñaHash = await bcrypt.hash(data.contraseña, 10);
            
            data.contraseña = contraseñaHash;
            
            usuario.contraseña = data.contraseña;        
        }

        if(data.correo) {
            usuario.correo = data.correo;        
        }
        await this.usuarioRepository.update({
            nombreUsuario: nombreUsuario
        },{
            nombreUsuario: usuario.nombreUsuario,
            contraseña: usuario.contraseña,
            correo: usuario.correo
        })

        return {message: 'usuario modificado'};
    }

    async delete(nombreUsuario: string){
        const usuario = await this.findByNombre(nombreUsuario);

        if(!usuario) throw new BadRequestException({message: 'Ese usuario no existe'})
        
        await this.usuarioRepository.delete({
            nombreUsuario: nombreUsuario
        })
     
        return {message: 'usuario eliminado'};

    }
}
