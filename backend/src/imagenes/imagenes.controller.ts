import { Body, Controller, Get, Headers, Param, Post, Req, Res, StreamableFile, UploadedFile, UploadedFiles, UseInterceptors } from '@nestjs/common';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { response } from 'express';
import { createReadStream } from 'fs';
import { request } from 'http';
import { diskStorage } from 'multer';
import path, { join } from 'path';
import { identity } from 'rxjs';
import { ImagenesEntity } from './entities/imagenes.entity';
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

    @Get('/getImage') 
    async getFile(@Body() path, @Res() res): Promise<any> {
        return await this.imagenesService.getFile(path, res);
    }

}
