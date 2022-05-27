import { IsNotEmpty, IsString } from 'class-validator' //van a validar nuestros atributos

export class CreateUsuarioDto {

    @IsNotEmpty()
    @IsString()
    nombreUsuario: string;

    @IsNotEmpty()
    @IsString()
    contraseña: string;

    @IsNotEmpty()
    @IsString()
    correo: string;


}
