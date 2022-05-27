import { EntityRepository, Repository } from "typeorm";
import { InmueblesEntity } from "./entities/inmuebles.entity";

@EntityRepository(InmueblesEntity)

export class InmueblesRepository extends Repository<InmueblesEntity>{}