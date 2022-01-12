/* eslint-disable prettier/prettier */
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PrismaModule } from './prisma/prisma.module';
import { AuthModule } from './auth/auth.module';
import { CategoriaModule } from './categoria/categoria.module';
import { FavoritosUsuarioModule } from './favoritos-usuario/favoritos-usuario.module';
import { TweetModule } from './tweet/tweet.module';
import { UsuarioModule } from './usuario/usuario.module';
import { SeguindoModule } from './seguindo/seguindo.module';
import { SeguidoresModule } from './seguidores/seguidores.module';

@Module({
  imports: [PrismaModule, AuthModule, CategoriaModule, FavoritosUsuarioModule, TweetModule, UsuarioModule, SeguindoModule, SeguidoresModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
