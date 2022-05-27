/// <reference types="multer" />
import { ImagenesService } from './imagenes.service';
export declare class ImagenesController {
    private readonly imagenesService;
    constructor(imagenesService: ImagenesService);
    uploadFiles(id: number, files: Array<Express.Multer.File>): Promise<{
        message: string;
    }>;
    getPaths(id: number): Promise<any>;
    getFile(path: any, res: any): Promise<any>;
}
