import { PartialType } from '@nestjs/mapped-types';
import { CreateInmuebleDto } from './create-imagenes.dto';

export class UpdateInmuebleDto extends PartialType(CreateInmuebleDto) {}
