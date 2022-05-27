import { PartialType } from '@nestjs/mapped-types';
import { CreateImagenesDto } from './create-imagenes.dto';

export class UpdateInmuebleDto extends PartialType(CreateImagenesDto) {}
