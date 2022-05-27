/// <reference types="multer" />
import { InmueblesRepository } from 'src/inmuebles/inmuebles.repository';
import { ImagenesEntity } from './entities/imagenes.entity';
import { ImagenesRepository } from './imagenes.repository';
export declare class ImagenesService {
    private imagenesRepository;
    private inmuebleRepository;
    constructor(imagenesRepository: ImagenesRepository, inmuebleRepository: InmueblesRepository);
    uploadFiles(id: number, files: Array<Express.Multer.File>): Promise<{
        message: string;
    }>;
    getPath(id: number): Promise<ImagenesEntity[]>;
    getFile(path: any, res: any): Promise<void>;
}
