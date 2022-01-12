/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { FavoritosUsuarioService } from './favoritos-usuario.service';
import { CreateFavoritosUsuarioDto } from './dto/create-favoritos-usuario.dto';
import { UpdateFavoritosUsuarioDto } from './dto/update-favoritos-usuario.dto';
import { AuthGuard } from '@nestjs/passport';

@Controller('favoritos-usuario')
export class FavoritosUsuarioController {
  constructor(private readonly favoritosUsuarioService: FavoritosUsuarioService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createFavoritosUsuarioDto: CreateFavoritosUsuarioDto) {
    return this.favoritosUsuarioService.create(createFavoritosUsuarioDto);
  }

  @Get()
  findAll() {
    return this.favoritosUsuarioService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.favoritosUsuarioService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateFavoritosUsuarioDto: UpdateFavoritosUsuarioDto) {
    return this.favoritosUsuarioService.update(+id, updateFavoritosUsuarioDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.favoritosUsuarioService.remove(+id);
  }
}
