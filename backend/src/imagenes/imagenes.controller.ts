import { Controller, Param, Post, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import { fileFilter, renameImage } from './helpers/imagenes.helper';
import { ImagenesService } from './imagenes.service';

@Controller('imagenes')
export class ImagenesController {
    constructor(private readonly imagenesService: ImagenesService) {}

    @Post('upload/:id')
    @UseInterceptors(FilesInterceptor('files', 5, {
        storage: diskStorage({
            destination: './upload',
            //filename: renameImage
        }),
        fileFilter: fileFilter
    }))
    uploadFiles(@Param('id') id: number, @UploadedFiles() files: Array<Express.Multer.File>){
        this.imagenesService.uploadFiles(id, files);
    }
}
