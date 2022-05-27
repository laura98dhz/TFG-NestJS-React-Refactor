import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InmueblesEntity } from './entities/inmuebles.entity';
import { InmueblesRepository } from './inmuebles.repository';
import { CreateInmuebleDto } from './dto/create-inmueble.dto';
import { UpdateInmuebleDto } from './dto/update-inmueble.dto';
import { Between, getRepository, LessThanOrEqual, MoreThanOrEqual } from 'typeorm';

import { UsuariosEntity } from 'src/usuarios/entities/usuarios.entity';
import { UsuariosRepository } from 'src/usuarios/usuarios.repository';


@Injectable()
export class InmueblesService {

    constructor(
        @InjectRepository(InmueblesEntity) private inmuebleRepository: InmueblesRepository,
        @InjectRepository(UsuariosEntity) private usuarioRepository: UsuariosRepository
    ) { }

    async findAll(limit: number, skip: number): Promise<any> {
        
        const inmueble = await this.inmuebleRepository.find({
            take:limit,
            skip:skip
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
        
        const usuario = await getRepository('UsuariosEntity').createQueryBuilder("usuario").where("usuario.nombreUsuario = :nombreUsuario", { nombreUsuario: nombreUsuario }).getOne();
        
        if(!usuario) throw new BadRequestException({message: 'Ese usuario no existe'}) 

        const inmueble = this.inmuebleRepository.find({
            where: {
                vendedor: nombreUsuario
            },
            take:limit,
            skip:skip
        });
        return inmueble;
    }

    async filterByTipo(tipoInmueble: CreateInmuebleDto): Promise<any> {
        const inmueble = this.inmuebleRepository.find({
            where: {
                tipoInmueble: tipoInmueble.tipoInmueble
            }
        });        
        return inmueble;
    }

    async filterByPrecio(precio: any): Promise<any> {

        var inmueble = {};
        if(precio.precioMin===undefined){

            inmueble = this.inmuebleRepository.find({
                precio: LessThanOrEqual(precio.precioMax)
            });

        }else if(precio.precioMax===undefined){
            
            inmueble = this.inmuebleRepository.find({
                precio: MoreThanOrEqual(precio.precioMin)
            }); 

        }else{

            inmueble = this.inmuebleRepository.find({
                precio: Between(precio.precioMin, precio.precioMax)
            });  
        }
        return inmueble;
    }

    async filterByHabitaciones(habitaciones: CreateInmuebleDto): Promise<any> {
        const inmueble = this.inmuebleRepository.find({
            where: {
                habitaciones: habitaciones.habitaciones
            }
        });        
        return inmueble;
    }

    async filterByBaños(baños: CreateInmuebleDto): Promise<any> {
        const inmueble = this.inmuebleRepository.find({
            where: {
                baños: baños.baños
            }
        });        
        return inmueble;
    }

    async filterBySuperficie(superficie: any): Promise<any> {
        var inmueble = {};
        if(superficie.superficieMin===undefined){

            inmueble = this.inmuebleRepository.find({
                precio: LessThanOrEqual(superficie.superficieMax)
            });
             
        }else if(superficie.superficieMax===undefined){
            
            inmueble = this.inmuebleRepository.find({
                precio: MoreThanOrEqual(superficie.superficieMin)
            }); 
        }else{

            inmueble = this.inmuebleRepository.find({
                precio: Between(superficie.superficieMin, superficie.superficieMax)
            });  
        }
        return inmueble;
    }
    
    async findByUbicacion(limit: number, skip: number, ubicacion: string): Promise<any> {
        const inmueble = this.inmuebleRepository.find({
            where: {
                ubicacion: ubicacion
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
                        
        return {message: 'usuario modificado'};
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
                                  
        return {message: 'inmueble eliminado'};

    }

}
