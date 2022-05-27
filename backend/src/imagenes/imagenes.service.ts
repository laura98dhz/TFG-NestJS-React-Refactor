import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { InmueblesEntity } from 'src/inmuebles/entities/inmuebles.entity';
import { InmueblesRepository } from 'src/inmuebles/inmuebles.repository';
import { ImagenesEntity } from './entities/imagenes.entity';
import { ImagenesRepository } from './imagenes.repository';

@Injectable()
export class ImagenesService {

    constructor(
        @InjectRepository(ImagenesEntity) private usuarioRepository: ImagenesRepository,
        @InjectRepository(InmueblesEntity) private inmuebleRepository: InmueblesRepository
    ) { }

    async uploadFiles(id: number, files: Array<Express.Multer.File>){
        
    }
}
