import { UsuariosService } from './usuarios.service';
import { CreateUsuarioDto } from './dto/create-usuarios.dto';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';
export declare class UsuariosController {
    private readonly usuariosService;
    constructor(usuariosService: UsuariosService);
    findAll(): Promise<any>;
    comprobarContraseña(usser: UpdateUsuarioDto): Promise<any>;
    findByNombre(nombreUsuario: string): Promise<any>;
    findByEmail(correo: any): Promise<any>;
    create(data: CreateUsuarioDto): Promise<any>;
    update(nombreUsuario: string, data: UpdateUsuarioDto): Promise<any>;
    delete(nombreUsuario: string): Promise<{
        message: string;
    }>;
}
