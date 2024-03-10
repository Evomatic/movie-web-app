import { Body, Injectable, Post } from '@nestjs/common';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class FavoritesService {
  constructor(private prisma: PrismaService) {}

  @Post()
  create(@Body() createFavoriteDto: CreateFavoriteDto) {
    return this.prisma.favorite.create({ data: createFavoriteDto });
  }

  findAll(userId: string) {
    return this.prisma.favorite.findMany({ where: { userId } });
  }

  remove(userId: string, movieId: string) {
    return this.prisma.favorite.deleteMany({ where: { userId, movieId } });
  }
}
