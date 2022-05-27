import { Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe, HttpStatus, HttpCode, UsePipes, ValidationPipe, UseInterceptors, UploadedFile, UploadedFiles } from '@nestjs/common';
import { InmueblesService } from './inmuebles.service';
import { CreateInmuebleDto } from './dto/create-inmueble.dto';
import { UpdateInmuebleDto } from './dto/update-inmueble.dto';
import { FileInterceptor, FilesInterceptor } from '@nestjs/platform-express';
import { Multer } from 'multer';

@Controller('inmuebles')
export class InmueblesController {
  
  constructor(private readonly inmueblesService: InmueblesService) {}

  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.inmueblesService.findAll();
  }

  @Get('/tipoInmueble')
  @HttpCode(HttpStatus.OK)
  filterByTipo(@Body() tipoInmueble: CreateInmuebleDto) {
    return this.inmueblesService.filterByTipo(tipoInmueble);
  }

  @Get('/precio')
  @HttpCode(HttpStatus.OK)
  filterByPrecio(@Body() precio: any) {
    return this.inmueblesService.filterByPrecio(precio);
  }

  @Get('/habitaciones')
  @HttpCode(HttpStatus.OK)
  filterByHabitaciones(@Body() habitaciones: CreateInmuebleDto) {
    return this.inmueblesService.filterByHabitaciones(habitaciones);
  }

  @Get('/banos')
  @HttpCode(HttpStatus.OK)
  filterByBaños(@Body() baños: CreateInmuebleDto) {
    return this.inmueblesService.filterByBaños(baños);
  }
  
  @Get('/superficie')
  @HttpCode(HttpStatus.OK)
  filterBySuperficie(@Body() superficie: any) {
    return this.inmueblesService.filterBySuperficie(superficie);
  }
  
  @Get('/mostrar/:usuario')
  @HttpCode(HttpStatus.OK)
  findByUsuario(@Param('usuario') usuario: string) {
    return this.inmueblesService.findByUsuario(usuario);
  }

  @Get('/id/:id')
  @HttpCode(HttpStatus.OK)
  findById(@Param('id') id: number) {
    return this.inmueblesService.findById(id);
  }

  @Get(':ubicacion')
  @HttpCode(HttpStatus.OK)
  findByUbicacion(@Param('ubicacion') ubicacion: string) {
    return this.inmueblesService.findByUbicacion(ubicacion);
  }

  @UsePipes(new ValidationPipe({whitelist:true}))
  @Post('/:vendedor')
  @UseInterceptors(FilesInterceptor ('files'))
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