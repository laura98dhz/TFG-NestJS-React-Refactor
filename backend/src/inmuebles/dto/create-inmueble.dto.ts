import { IsNotEmpty, IsNumber, IsPositive, IsString } from "class-validator";
import { CreateUsuarioDto } from "src/usuarios/dto/create-usuarios.dto";
import { UsuariosEntity } from "src/usuarios/entities/usuarios.entity";

export class CreateInmuebleDto {
    
    @IsNotEmpty()
    @IsString()
    readonly ubicacion: string;

    @IsNotEmpty()
    @IsString()
    readonly tipoInmueble: string;

    @IsNotEmpty()
    @IsString()
    readonly tipoOperacion: string;
    
    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly superficie: number;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly habitaciones: number;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly baños: number;

    @IsNotEmpty()
    @IsNumber()
    @IsPositive()
    readonly precio: number;

    @IsNotEmpty()
    @IsString()
    readonly descripcion: string;

    @IsNotEmpty()
    @IsString()
    readonly nombreVendedor: string;

}
