<<<<<<< HEAD
import { IsNotEmpty, IsString } from "class-validator";

export class CreateCategoriaDto {
    @IsNotEmpty()
    @IsString()
=======
import {ApiProperty} from '@nestjs/swagger';

export class CreateCategoriaDto {
    @ApiProperty()
>>>>>>> 11b00da90a3a977fbd3b2e4c6e13c12bbd13fb1a
    nome: string;
}
