/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty } from "class-validator";

export class CreateSeguindoDto {
    @IsNotEmpty()
    @IsInt()
    usuariosId: number;

    @IsNotEmpty()
    @IsInt()
    idSeguindo: number;
}
