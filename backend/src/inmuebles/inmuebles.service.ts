import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InmueblesEntity } from './entities/inmuebles.entity';
import { InmueblesRepository } from './inmuebles.repository';
import { CreateInmuebleDto } from './dto/create-inmueble.dto';
import { UpdateInmuebleDto } from './dto/update-inmueble.dto';
import { Between, getRepository, ILike, LessThanOrEqual, Like, MoreThanOrEqual } from 'typeorm';

import { UsuariosEntity } from 'src/usuarios/entities/usuarios.entity';
import { UsuariosRepository } from 'src/usuarios/usuarios.repository';


@Injectable()
export class InmueblesService {

    constructor(
        @InjectRepository(InmueblesEntity) private inmuebleRepository: InmueblesRepository,
        @InjectRepository(UsuariosEntity) private usuarioRepository: UsuariosRepository
    ) { }

    async findAll(limit: number, skip: number, operacion: string): Promise<any> {
        
        if(!operacion){
            
            operacion="%";
        }
        const inmueble = await this.inmuebleRepository.findAndCount({
            
            take:limit,
            skip:skip,
            where:{
                tipoOperacion: Like('%'+operacion+'%')
            }
        });
      
        return inmueble;
    }

    async filter(tipo: string, precioMin: number, precioMax: number, habitaciones: string, banos: number, superficieMin: number, superficieMax: number, limit: number, skip: number): Promise<any> {
        
        if(!tipo){
            tipo="%";
        }
        if(!precioMin){
            precioMin=0;
        }
        if(!precioMax){
            precioMax=Number.MAX_VALUE;
        }
        if(!superficieMin){
            precioMin=0;
        }
        if(!superficieMax){
            precioMax=Number.MAX_VALUE;
        }

        const inmueble = await this.inmuebleRepository.findAndCount({
            where:{
                tipoInmueble: Like('%'+tipo+'%'),
                precio: Between(precioMin, precioMax),
                habitaciones: MoreThanOrEqual(habitaciones),
                baños: MoreThanOrEqual(banos),
                superficie: Between(superficieMin, superficieMax)
            },
            take: limit,
            skip: skip

        });
        
       return inmueble;
    }

    async findById(id: number): Promise<any> {
        const inmueble = await this.inmuebleRepository.findOne({
            where: {
                id: id
            }
        });
        return inmueble;
    }

    async findByUsuario(limit: number, skip: number, nombreUsuario: string): Promise<any> {
        
        const usuario = await this.usuarioRepository.findOne({
            where:{
                nombreUsuario:nombreUsuario
            }
        });
        
        if(!usuario) throw new BadRequestException({message: 'Ese usuario no existe'}) 

        const inmueble = this.inmuebleRepository.findAndCount({
            where: {
                vendedor: nombreUsuario
            },
            take:limit,
            skip:skip
        });
        return inmueble;
    }
    
    async findByUbicacion(limit: number, skip: number, ubicacion: string, operacion: string): Promise<any> {
        
        if(!operacion){
            
            operacion="%";
        }

        const inmueble = this.inmuebleRepository.findAndCount({
            where: {
                ubicacion: ubicacion,
                tipoOperacion: Like('%'+operacion+'%')
            },
            take:limit,
            skip:skip
        });        
        return inmueble;
    }

    async create(nombreUsuario: string, data: CreateInmuebleDto): Promise<any> {
        const usuario = this.usuarioRepository.findOne({
            where: {
                nombreUsuario: nombreUsuario
            }
        });
        if(!usuario) throw new BadRequestException({message: 'Ese usuario no existe'}) 

        const newInmueble = this.inmuebleRepository.create(data);
        newInmueble.vendedor = await this.usuarioRepository.findOne({
            where:{
                nombreUsuario:nombreUsuario
            }
        });
        
        await this.inmuebleRepository.save(newInmueble);
        
        return newInmueble;
    }

    async update(id: number, data: UpdateInmuebleDto): Promise<any>{
        const inmueble = await this.inmuebleRepository.findOne({
            where: {
                id: id
            }
        });
        if(!inmueble) throw new BadRequestException({message: 'Ese inmueble no existe'})
        
        if(data.baños) {
            inmueble.baños = data.baños;        
        }

        if(data.descripcion) {
            inmueble.descripcion = data.descripcion;        
        }

        if(data.habitaciones) {
            inmueble.habitaciones = data.habitaciones;        
        }

        if(data.precio) {
            inmueble.precio = data.precio;        
        }

        if(data.superficie) {
            inmueble.superficie = data.superficie;        
        }

        if(data.tipoInmueble) {
            inmueble.tipoInmueble = data.tipoInmueble;        
        }

        if(data.tipoOperacion) {
            inmueble.tipoOperacion = data.tipoOperacion;        
        }

        if(data.ubicacion) {
            inmueble.ubicacion = data.ubicacion;        
        }

        await this.inmuebleRepository.update({
                id: id
            },
            {
                baños: inmueble.baños,
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

    async delete(id: number){
        const inmueble = await this.inmuebleRepository.findOne({
            where: {
                id: id
            }
        });

        if(!inmueble) throw new BadRequestException({message: 'Ese inmueble no existe'})
        
        await this.inmuebleRepository.delete({
            id: id
        });
                
        const listaInmuebles = await this.inmuebleRepository.findAndCount();
        return listaInmuebles;

    }

}
