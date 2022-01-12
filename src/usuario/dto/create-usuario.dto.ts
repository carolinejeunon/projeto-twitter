/* eslint-disable prettier/prettier */
import { IsDateString, IsNotEmpty, IsString } from "class-validator";

/* eslint-disable prettier/prettier */
export class CreateUsuarioDto {
    @IsNotEmpty()
    @IsString()
    nome: string;

    @IsString()
    imagem: string;

    @IsString()
    bio: string;

    @IsNotEmpty()
    @IsDateString()
    nascimento: string;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    senha: string;
}
