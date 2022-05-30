import { InmueblesService } from './inmuebles.service';
import { CreateInmuebleDto } from './dto/create-inmueble.dto';
import { UpdateInmuebleDto } from './dto/update-inmueble.dto';
export declare class InmueblesController {
    private readonly inmueblesService;
    constructor(inmueblesService: InmueblesService);
    findAll(limit: number, skip: number, operacion: string): Promise<any>;
    filter(tipo: string, precioMin: number, precioMax: number, habitaciones: string, banos: number, superficieMin: number, superficieMax: number, limit: number, skip: number): Promise<any>;
    findByUsuario(limit: number, skip: number, usuario: string): Promise<any>;
    findById(id: number): Promise<any>;
    findByUbicacion(limit: number, skip: number, ubicacion: string, operacion: string): Promise<any>;
    create(vendedor: string, data: CreateInmuebleDto): Promise<any>;
    update(id: number, data: UpdateInmuebleDto): Promise<any>;
    remove(id: number): Promise<[import("./entities/inmuebles.entity").InmueblesEntity[], number]>;
}
