import { Body, Controller, Delete, Get, Headers, Param, Post, Query, Req, Res, StreamableFile, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { diskStorage } from 'multer';
import path from 'path';
import { fileFilter, renameImage } from './helpers/imagenes.helper';
import { ImagenesService } from './imagenes.service';

@Controller('imagenes')
export class ImagenesController {
    constructor(private readonly imagenesService: ImagenesService) {}

    @Post('upload/:id')
    @UseInterceptors(FilesInterceptor('files', 5, {
        storage: diskStorage({
            destination: './upload',
            filename: renameImage
        }),
        fileFilter: fileFilter
    }))
    async uploadFiles(@Param('id') id: number, @UploadedFiles() files: Array<Express.Multer.File>){
        return await this.imagenesService.uploadFiles(id, files);
    }

    @Get('/getPaths/:id') //id del inmueble
    async getPaths(@Param('id') id: number): Promise<any> {
        return await this.imagenesService.getPath(id);
    }

    @Get('/getImage/:path') 
    async getFile(@Query('path') path: String, @Res() res): Promise<any> {
        return await this.imagenesService.getFile(path, res);
    }

}