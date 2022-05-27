import { InmueblesEntity } from "src/inmuebles/entities/inmuebles.entity";
export declare class UsuariosEntity {
    readonly nombreUsuario: string;
    readonly contraseña: string;
    readonly correo: string;
    inmuebles: InmueblesEntity[];
}
