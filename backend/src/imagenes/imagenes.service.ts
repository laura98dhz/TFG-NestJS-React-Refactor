import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { createReadStream } from 'fs';
import { join } from 'path';
import { InmueblesEntity } from 'src/inmuebles/entities/inmuebles.entity';
import { InmueblesRepository } from 'src/inmuebles/inmuebles.repository';
import { getRepository } from 'typeorm';
import { CreateImagenesDto } from './dto/create-imagenes.dto';
import { ImagenesEntity } from './entities/imagenes.entity';
import { ImagenesRepository } from './imagenes.repository';

@Injectable()
export class ImagenesService {

    constructor(
        @InjectRepository(ImagenesEntity) private imagenesRepository: ImagenesRepository,
        @InjectRepository(InmueblesEntity) private inmuebleRepository: InmueblesRepository
    ) { }

    async uploadFiles(id: number, files: Array<Express.Multer.File>){
                
        const inmueble = await this.inmuebleRepository.findOne({
            where:{
                id: id
            }
        })
        if(!inmueble) throw new BadRequestException({message: 'Ese inmueble no existe'}) 
        
        for( var file of files){
            const filename = file.filename;
            const path = file.path;
            
            const img = this.imagenesRepository.create({filename,path});
            
            img.inmueble = await this.inmuebleRepository.findOne({
                where:{
                    id:id
                }
            });

            await this.imagenesRepository.save(img);
        }

        return {message:'Imágenes subidas'}
    }

    async getPath(id: number){
        
        const files = await this.imagenesRepository.find({
            where: {
                inmueble: id,
            }
        });

        return files;
    }

    async getFile(path, res){
        const img = createReadStream(join(process.cwd(), path.path));
        img.pipe(res);
    }

}
