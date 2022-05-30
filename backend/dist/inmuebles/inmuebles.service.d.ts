import { InmueblesRepository } from './inmuebles.repository';
import { CreateInmuebleDto } from './dto/create-inmueble.dto';
import { UpdateInmuebleDto } from './dto/update-inmueble.dto';
import { UsuariosRepository } from 'src/usuarios/usuarios.repository';
export declare class InmueblesService {
    private inmuebleRepository;
    private usuarioRepository;
    constructor(inmuebleRepository: InmueblesRepository, usuarioRepository: UsuariosRepository);
    findAll(limit: number, skip: number, operacion: string): Promise<any>;
    filter(tipo: string, precioMin: number, precioMax: number, habitaciones: string, banos: number, superficieMin: number, superficieMax: number, limit: number, skip: number): Promise<any>;
    findById(id: number): Promise<any>;
    findByUsuario(limit: number, skip: number, nombreUsuario: string): Promise<any>;
    findByUbicacion(limit: number, skip: number, ubicacion: string, operacion: string): Promise<any>;
    create(nombreUsuario: string, data: CreateInmuebleDto): Promise<any>;
    update(id: number, data: UpdateInmuebleDto): Promise<any>;
    delete(id: number): Promise<{
        message: string;
    }>;
}
