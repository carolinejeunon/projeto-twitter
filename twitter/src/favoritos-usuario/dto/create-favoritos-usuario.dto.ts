import { IsInt, IsNotEmpty } from "class-validator";

export class CreateFavoritosUsuarioDto {
    @IsNotEmpty()
    @IsInt()
    usuariosId: number;

    @IsNotEmpty()
    @IsInt()
    tweetId: number;
}
