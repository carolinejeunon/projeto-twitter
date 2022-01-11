/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty, IsString } from "class-validator";

export class CreateTweetDto {
    @IsNotEmpty()
    @IsInt()
    usuariosId: number;

    @IsNotEmpty()
    @IsString()
    texto: string;

    @IsString()
    emoji: string;

    @IsNotEmpty()
    @IsInt()
    curtidas: number; 
}
