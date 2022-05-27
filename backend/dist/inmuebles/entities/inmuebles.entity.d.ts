import { UsuariosEntity } from "../../usuarios/entities/usuarios.entity";
import { ImagenesEntity } from "src/imagenes/entities/imagenes.entity";
export declare class InmueblesEntity {
    id: number;
    ubicacion: string;
    tipoInmueble: string;
    tipoOperacion: string;
    vendedor: UsuariosEntity;
    superficie: number;
    habitaciones: number;
    baños: number;
    precio: number;
    descripcion: string;
    imagenes: ImagenesEntity[];
}
