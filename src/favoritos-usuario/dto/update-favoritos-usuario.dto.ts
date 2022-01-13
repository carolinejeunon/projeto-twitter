/* eslint-disable prettier/prettier */
import { PartialType } from '@nestjs/swagger';
import { CreateFavoritosOnUsuarioDto } from './create-favoritos-usuario.dto';

export class UpdateFavoritosOnUsuarioDto extends PartialType(CreateFavoritosOnUsuarioDto) {}
