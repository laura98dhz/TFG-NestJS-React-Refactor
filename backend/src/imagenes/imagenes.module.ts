import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { InmueblesEntity } from 'src/inmuebles/entities/inmuebles.entity';
import { ImagenesEntity } from './entities/imagenes.entity';
import { ImagenesController } from './imagenes.controller';
import { ImagenesService } from './imagenes.service';

@Module({
  imports:[TypeOrmModule.forFeature([ImagenesEntity]),TypeOrmModule.forFeature([InmueblesEntity])],
  controllers: [ImagenesController],
  providers: [ImagenesService]
})
export class ImagenesModule {}
