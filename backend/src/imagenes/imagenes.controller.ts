import { Controller, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { fileFilter, renameImage } from './helpers/imagenes.helper';
import { ImagenesService } from './imagenes.service';

@Controller('imagenes')
export class ImagenesController {
    constructor(private readonly imagenesService: ImagenesService) {}

    @Post('upload')
    @UseInterceptors(FilesInterceptor('files', 5, {
        storage: diskStorage({
            destination: './upload',
            //filename: renameImage
        }),
        fileFilter: fileFilter
    }))
    uploadFiles(@UploadedFiles() files: Array<Express.Multer.File>){
        console.log(files)
    }
}
