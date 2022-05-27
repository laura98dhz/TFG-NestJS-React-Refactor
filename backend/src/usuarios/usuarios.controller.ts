import { Controller, Get, Post, Body, Param, Delete, Put, ParseIntPipe, HttpStatus, HttpCode, UsePipes, ValidationPipe } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuarios.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Controller('usuarios')
export class UsuariosController {
  
  constructor(private readonly usuariosService: UsuariosService) {}

  
  @Get()
  @HttpCode(HttpStatus.OK)
  findAll() {
    return this.usuariosService.findAll();
  }

  @Post('/password')
  @HttpCode(HttpStatus.OK)
  comprobarContraseña(@Body() usser: UpdateUsuarioDto) {
    return this.usuariosService.comprobarPassword(usser);
  }
  
  @Get(':nombreUsuario')
  @HttpCode(HttpStatus.OK)
  findByNombre(@Param('nombreUsuario') nombreUsuario: string) {
    return this.usuariosService.findByNombre(nombreUsuario);
  }

  @Post('email')
  @HttpCode(HttpStatus.OK)
  findByEmail(@Body() correo: any) {
    return this.usuariosService.findByEmail(correo.correo);
  }

  @UsePipes(new ValidationPipe({whitelist:true}))
  @Post()
  @HttpCode(HttpStatus.CREATED)
  create(@Body() data: CreateUsuarioDto) {
    return this.usuariosService.create(data);
  }

  @UsePipes(new ValidationPipe({whitelist:true}))
  @Put(':nombreUsuario')
  @HttpCode(HttpStatus.OK)
  update(@Param('nombreUsuario') nombreUsuario: string, @Body() data: UpdateUsuarioDto) {
    return this.usuariosService.update(nombreUsuario, data);
  }

  @Delete(':nombreUsuario')
  @HttpCode(HttpStatus.OK)
  delete(@Param('nombreUsuario') nombreUsuario: string) {
    return this.usuariosService.delete(nombreUsuario);
  }
}


