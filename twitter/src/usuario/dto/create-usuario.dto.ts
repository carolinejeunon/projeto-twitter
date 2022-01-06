/* eslint-disable prettier/prettier */
import { IsDate, IsNotEmpty, IsString } from "class-validator";

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
    @IsDate()
    nascimento: Date;

    @IsNotEmpty()
    @IsString()
    email: string;

    @IsNotEmpty()
    @IsString()
    senha: string;
}
