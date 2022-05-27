import { InmueblesRepository } from './inmuebles.repository';
import { CreateInmuebleDto } from './dto/create-inmueble.dto';
import { UpdateInmuebleDto } from './dto/update-inmueble.dto';
import { UsuariosRepository } from 'src/usuarios/usuarios.repository';
export declare class InmueblesService {
    private inmuebleRepository;
    private usuarioRepository;
    constructor(inmuebleRepository: InmueblesRepository, usuarioRepository: UsuariosRepository);
    findAll(): Promise<any>;
    findById(id: number): Promise<any>;
    findByUsuario(nombreUsuario: string): Promise<any>;
    filterByTipo(tipoInmueble: CreateInmuebleDto): Promise<any>;
    filterByPrecio(precio: any): Promise<any>;
    filterByHabitaciones(habitaciones: CreateInmuebleDto): Promise<any>;
    filterByBaños(baños: CreateInmuebleDto): Promise<any>;
    filterBySuperficie(superficie: any): Promise<any>;
    findByUbicacion(ubicacion: string): Promise<any>;
    create(nombreUsuario: string, data: CreateInmuebleDto): Promise<any>;
    update(id: number, data: UpdateInmuebleDto): Promise<any>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
