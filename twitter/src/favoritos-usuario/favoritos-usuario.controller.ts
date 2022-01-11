import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { FavoritosUsuarioService } from './favoritos-usuario.service';
import { CreateFavoritosUsuarioDto } from './dto/create-favoritos-usuario.dto';
import { UpdateFavoritosUsuarioDto } from './dto/update-favoritos-usuario.dto';
<<<<<<< HEAD
import { AuthGuard } from '@nestjs/passport';
=======
import { ApiTags } from '@nestjs/swagger';
>>>>>>> 11b00da90a3a977fbd3b2e4c6e13c12bbd13fb1a

@ApiTags('favoritos-usuario')
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
