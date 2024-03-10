import { Controller, Get, Post, Body, Param, Delete } from '@nestjs/common';
import { FavoritesService } from './favorites.service';
import { CreateFavoriteDto } from './dto/create-favorite.dto';
import { ApiCreatedResponse, ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { FavoriteEntity } from './entities/favorite.entity';
import { UserEntity } from 'src/users/entities/user.entity';
@Controller('favorites')
@ApiTags('favorites')
export class FavoritesController {
  constructor(private readonly favoritesService: FavoritesService) {}

  @Get(':userId')
  @ApiOkResponse({ type: UserEntity })
  findAll(@Param('userId') userId: string) {
    return this.favoritesService.findAll(userId);
  }

  @Post()
  @ApiCreatedResponse({ type: FavoriteEntity })
  create(@Body() createFavoriteDto: CreateFavoriteDto) {
    return this.favoritesService.create(createFavoriteDto);
  }

  @Delete(':userId/movies/:movieId')
  @ApiOkResponse({ type: UserEntity })
  remove(@Param('userId') userId: string, @Param('movieId') movieId: string) {
    return this.favoritesService.remove(userId, movieId);
  }
}
