/* eslint-disable prettier/prettier */
import { IsInt, IsNotEmpty } from "class-validator";

export class CreateFavoritosUsuarioDto {
    @IsNotEmpty()
    @IsInt()
    usuarioid: number;

    @IsNotEmpty()
    @IsInt()
    tweetid: number;
}
