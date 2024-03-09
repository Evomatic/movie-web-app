import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';

@Controller('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get(':userId')
  findAll(@Param('userId') userId: string) {
    return this.favoritesService.findAll(userId);
  }

  @Post()
  create(@Body() createFavoriteDto: CreateFavoriteDto) {
    return this.favoritesService.create(createFavoriteDto);
  }

  @Delete(':userId/movies/:movieId')
  remove(@Param('userId') userId: string, @Param('movieId') movieId: string) {
    return this.favoritesService.remove(userId, movieId);
  }
}
