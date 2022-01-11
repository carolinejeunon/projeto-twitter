/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SeguindoService } from './seguindo.service';
import { CreateSeguindoDto } from './dto/create-seguindo.dto';
import { UpdateSeguindoDto } from './dto/update-seguindo.dto';
<<<<<<< HEAD
import { AuthGuard } from '@nestjs/passport';
=======
import { ApiTags } from '@nestjs/swagger';
>>>>>>> 11b00da90a3a977fbd3b2e4c6e13c12bbd13fb1a

@ApiTags('seguindo')
@Controller('seguindo')
export class SeguindoController {
  constructor(private readonly seguindoService: SeguindoService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createSeguindoDto: CreateSeguindoDto) {
    return this.seguindoService.create(createSeguindoDto);
  }

  @Get()
  findAll() {
    return this.seguindoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seguindoService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateSeguindoDto: UpdateSeguindoDto) {
    return this.seguindoService.update(+id, updateSeguindoDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.seguindoService.remove(+id);
  }
}
