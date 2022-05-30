import { Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe, HttpStatus, HttpCode, UsePipes, ValidationPipe, UseInterceptors, UploadedFile, UploadedFiles, Query, PreconditionFailedException } from '@nestjs/common';
import { InmueblesService } from './inmuebles.service';
import { CreateInmuebleDto } from './dto/create-inmueble.dto';
import { UpdateInmuebleDto } from './dto/update-inmueble.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Multer } from 'multer';

@Controller('inmuebles')
export class InmueblesController {
  
  constructor(private readonly inmueblesService: InmueblesService) {}

  @Get('/getAll')
  @HttpCode(HttpStatus.OK)
  findAll(@Query('limit') limit: number, @Query('skip') skip: number, @Query('operacion') operacion: string) {
    console.log(operacion)

    return this.inmueblesService.findAll(limit, skip, operacion);
  }

  //http://localhost:8080/inmuebles/filter?tipo=P&precioMin=&precioMax=&habitaciones=&banos=&superficieMin=&superficieMax=&limit=&skip=
  @Get('/filter')
  @HttpCode(HttpStatus.OK)
  filter(@Query('tipo') tipo: string, @Query('precioMin')precioMin: number, @Query('precioMax')precioMax: number, @Query('habitaciones')habitaciones: string, @Query('banos') banos: number, @Query('superficieMin') superficieMin: number, @Query('superficieMax') superficieMax: number, @Query('limit')limit: number, @Query('skip')skip: number) {
    return this.inmueblesService.filter(tipo,precioMin, precioMax, habitaciones, banos, superficieMin, superficieMax, limit, skip);
  }
 
  @Get('/mostrar/:usuario')
  @HttpCode(HttpStatus.OK)
  findByUsuario(@Query('limit') limit: number, @Query('skip') skip: number, @Param('usuario') usuario: string) {
    return this.inmueblesService.findByUsuario(limit, skip, usuario);
  }

  @Get('/id/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id') id: number) {
    return this.inmueblesService.findById(id);
  }

  @Get('/:ubicacion')
  @HttpCode(HttpStatus.OK)
  findByUbicacion(@Query('limit') limit: number, @Query('skip') skip: number, @Param('ubicacion') ubicacion: string, @Query('operacion') operacion: string) {
    return this.inmueblesService.findByUbicacion(limit, skip, ubicacion, operacion);
  }

  @UsePipes(new ValidationPipe({whitelist:true}))
  @Post('/:vendedor')
  @HttpCode(HttpStatus.CREATED)
  create(@Param('vendedor') vendedor: string, @Body() data: CreateInmuebleDto) {
    return this.inmueblesService.create(vendedor, data);
  }

  @UsePipes(new ValidationPipe({whitelist:true}))
  @Put('/:id')
  @HttpCode(HttpStatus.OK)
  update(@Param('id', ParseIntPipe) id: number, @Body() data: UpdateInmuebleDto) {
    return this.inmueblesService.update(id,data);
  }

  @Delete('/:id')
  @HttpCode(HttpStatus.OK)
  remove(@Param('id', ParseIntPipe) id: number) {
    return this.inmueblesService.delete(id);
  }
}