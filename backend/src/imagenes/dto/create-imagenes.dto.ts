import { IsNotEmpty, IsString } from "class-validator";

export class CreateImagenesDto {
    
    
    @IsNotEmpty()
    @IsString()
    filename: string;

    @IsNotEmpty()
    @IsString()
    path: string;

}
