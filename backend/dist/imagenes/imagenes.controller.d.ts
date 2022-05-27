/// <reference types="multer" />
import { ImagenesService } from './imagenes.service';
export declare class ImagenesController {
    private readonly imagenesService;
    constructor(imagenesService: ImagenesService);
    uploadFiles(files: Array<Express.Multer.File>): void;
}
