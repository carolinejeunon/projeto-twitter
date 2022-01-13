/* eslint-disable prettier/prettier */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateFavoritosUsuarioDto } from './dto/create-favoritos-usuario.dto';
import { UpdateFavoritosUsuarioDto } from './dto/update-favoritos-usuario.dto';

@Injectable()
export class FavoritosUsuarioService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createFavoritosUsuarioDto: CreateFavoritosUsuarioDto) {
    return await this.prisma.favoritosUsuario.create({
      data: {...createFavoritosUsuarioDto},
    });
  }

  async findAll() {
    return await this.prisma.favoritosUsuario.findMany();  
  }

  async findOne(id: number) {
    return await this.prisma.favoritosUsuario.findUnique({
      where: {id},
    });  }

  async update(id: number, updateFavoritosUsuarioDto: UpdateFavoritosUsuarioDto) {
    return await this.prisma.favoritosUsuario.update({
      data: {...updateFavoritosUsuarioDto},
      where: {id},
    });
  }

  async remove(id: number) {
    return this.prisma.favoritosUsuario.delete({
      where: {id},
    });
  }
}
