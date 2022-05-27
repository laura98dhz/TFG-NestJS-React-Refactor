import { EntityRepository, Repository } from "typeorm";
import { ImagenesEntity } from "./entities/imagenes.entity";

@EntityRepository(ImagenesEntity)

export class ImagenesRepository extends Repository<ImagenesEntity>{}