/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty } from "class-validator";

export class CreateSeguidoresDto {
    @IsNotEmpty()
    @IsInt()
    idSeguidores: number;
}
