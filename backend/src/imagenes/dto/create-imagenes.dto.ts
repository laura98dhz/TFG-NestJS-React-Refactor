import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateInmuebleDto {
    
    
    @IsNotEmpty()
    @IsString()
    filename: string;

}
