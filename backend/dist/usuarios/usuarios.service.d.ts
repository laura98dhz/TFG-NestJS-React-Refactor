import { CreateUsuarioDto } from './dto/create-usuarios.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
import { UsuariosRepository } from './usuarios.repository';
export declare class UsuariosService {
    private usuarioRepository;
    constructor(usuarioRepository: UsuariosRepository);
    findAll(): Promise<any>;
    findByNombre(nombreUsuario: string): Promise<any>;
    findByEmail(correo: string): Promise<any>;
    comprobarPassword(usser: UpdateUsuarioDto): Promise<any>;
    create(data: CreateUsuarioDto): Promise<any>;
    update(nombreUsuario: string, data: UpdateUsuarioDto): Promise<any>;
    delete(nombreUsuario: string): Promise<{
        message: string;
    }>;
}
