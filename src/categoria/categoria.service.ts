/* eslint-disable prettier/prettier */
import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';
import { CreateCategoriaDto } from './dto/create-categoria.dto';
import { UpdateCategoriaDto } from './dto/update-categoria.dto';
import { Categoria } from '.prisma/client';

@Injectable()
export class CategoriaService {
  constructor(private readonly prisma: PrismaService) {}

  async create(createCategoriaDto: CreateCategoriaDto): Promise<Categoria> {
    return await this.prisma.categoria.create({
      data: {...createCategoriaDto},
    });
  }

  async findAll(): Promise<Categoria[]> {
    return await this.prisma.categoria.findMany();  
  }

  async findOne(id: number): Promise<Categoria> {
    return await this.prisma.categoria.findUnique({
      where: {id},
    });  }

  async update(id: number, updateCategoriaDto: UpdateCategoriaDto) {
    return await this.prisma.categoria.update({
      data: {...updateCategoriaDto},
      where: {id},
    });
  }

  async remove(id: number) {
    return this.prisma.categoria.delete({
      where: {id},
    });
  }
}
