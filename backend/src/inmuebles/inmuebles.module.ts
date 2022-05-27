import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsuariosEntity } from 'src/usuarios/entities/usuarios.entity';
import { InmueblesEntity } from './entities/inmuebles.entity';
import { InmueblesController } from './inmuebles.controller';
import { InmueblesService } from './inmuebles.service';

@Module({
    imports:[TypeOrmModule.forFeature([InmueblesEntity]),TypeOrmModule.forFeature([UsuariosEntity])],
    providers: [InmueblesService],
    controllers: [InmueblesController]
  })
export class InmueblesModule {}