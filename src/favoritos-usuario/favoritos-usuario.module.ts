import { Module } from '@nestjs/common';
import { FavoritosUsuarioService } from './favoritos-usuario.service';
import { FavoritosUsuarioController } from './favoritos-usuario.controller';
import { PrismaModule } from 'src/prisma/prisma.module';

@Module({
  controllers: [FavoritosUsuarioController],
  providers: [FavoritosUsuarioService],
  imports: [PrismaModule],
})
export class FavoritosUsuarioModule {}
