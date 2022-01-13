/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFavoritosOnUsuarioDto } from './dto/create-favoritos-usuario.dto';
import { UpdateFavoritosOnUsuarioDto } from './dto/update-favoritos-usuario.dto';
import { FavoritosOnUsuario } from '@prisma/client';

@Injectable()
export class FavoritosUsuarioService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createFavoritosOnUsuarioDto: CreateFavoritosOnUsuarioDto): Promise<FavoritosOnUsuario> {
    return await this.prisma.favoritosOnUsuario.create({
      data: {...createFavoritosOnUsuarioDto},
    });
  }

  async findAll(): Promise<FavoritosOnUsuario[]> {
    return await this.prisma.favoritosOnUsuario.findMany();  
  }

  async findOne(id: number): Promise<FavoritosOnUsuario> {
    return await this.prisma.favoritosOnUsuario.findUnique({
      where: {id},
    });  }

  async update(id: number, updateFavoritosOnUsuarioDto: UpdateFavoritosOnUsuarioDto) {
    return await this.prisma.favoritosOnUsuario.update({
      data: {...updateFavoritosOnUsuarioDto},
      where: {id},
    });
  }

  async remove(id: number) {
    return this.prisma.favoritosOnUsuario.delete({
      where: {id},
    });
  }
}
