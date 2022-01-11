/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty } from "class-validator";

export class CreateSeguidoresDto {
    @IsNotEmpty()
    @IsInt()
    usuariosId: number;

    @IsNotEmpty()
    @IsInt()
    idSeguidores: number;
}
