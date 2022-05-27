/// <reference types="multer" />
import { InmueblesRepository } from 'src/inmuebles/inmuebles.repository';
import { ImagenesRepository } from './imagenes.repository';
export declare class ImagenesService {
    private usuarioRepository;
    private inmuebleRepository;
    constructor(usuarioRepository: ImagenesRepository, inmuebleRepository: InmueblesRepository);
    uploadFiles(id: number, files: Array<Express.Multer.File>): Promise<void>;
}
