import { InmueblesService } from './inmuebles.service';
import { CreateInmuebleDto } from './dto/create-inmueble.dto';
import { UpdateInmuebleDto } from './dto/update-inmueble.dto';
export declare class InmueblesController {
    private readonly inmueblesService;
    constructor(inmueblesService: InmueblesService);
    findAll(limit: number, skip: number): Promise<any>;
    filterByTipo(tipoInmueble: CreateInmuebleDto): Promise<any>;
    filterByPrecio(precio: any): Promise<any>;
    filterByHabitaciones(habitaciones: CreateInmuebleDto): Promise<any>;
    filterByBaños(baños: CreateInmuebleDto): Promise<any>;
    filterBySuperficie(superficie: any): Promise<any>;
    findByUsuario(limit: number, skip: number, usuario: string): Promise<any>;
    findById(id: number): Promise<any>;
    findByUbicacion(limit: number, skip: number, ubicacion: string): Promise<any>;
    create(vendedor: string, data: CreateInmuebleDto): Promise<any>;
    update(id: number, data: UpdateInmuebleDto): Promise<any>;
    remove(id: number): Promise<{
        message: string;
    }>;
}
