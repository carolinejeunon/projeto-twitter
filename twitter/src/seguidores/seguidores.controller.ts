/* eslint-disable prettier/prettier */
import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards } from '@nestjs/common';
import { SeguidoresService } from './seguidores.service';
import { CreateSeguidoresDto } from './dto/create-seguidores.dto';
import { UpdateSeguidoresDto } from './dto/update-seguidores.dto';
<<<<<<< HEAD
import { AuthGuard } from '@nestjs/passport';
=======
import { ApiTags } from '@nestjs/swagger';
>>>>>>> 11b00da90a3a977fbd3b2e4c6e13c12bbd13fb1a

@ApiTags('seguidores')
@Controller('seguidores')
export class SeguidoresController {
  constructor(private readonly seguidoresService: SeguidoresService) {}

  @Post()
  @UseGuards(AuthGuard('jwt'))
  create(@Body() createSeguidoresDto: CreateSeguidoresDto) {
    return this.seguidoresService.create(createSeguidoresDto);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  findAll() {
    return this.seguidoresService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.seguidoresService.findOne(+id);
  }

  @Patch(':id')
  @UseGuards(AuthGuard('jwt'))
  update(@Param('id') id: string, @Body() updateSeguidoresDto: UpdateSeguidoresDto) {
    return this.seguidoresService.update(+id, updateSeguidoresDto);
  }

  @Delete(':id')
  @UseGuards(AuthGuard('jwt'))
  remove(@Param('id') id: string) {
    return this.seguidoresService.remove(+id);
  }
}
