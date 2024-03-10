import { Controller, Get, Param } from '@nestjs/common';
import { MoviesService } from './movies.service';
import { ApiOkResponse, ApiTags } from '@nestjs/swagger';
import { MovieEntity } from './entities/movie.entity';

@Controller('movies')
@ApiTags('movies')
export class MoviesController {
  constructor(private readonly moviesService: MoviesService) {}

  @Get()
  @ApiOkResponse({ type: MovieEntity, isArray: true })
  findAll() {
    return this.moviesService.findAll();
  }

  @Get(':movieId')
  @ApiOkResponse({ type: MovieEntity })
  findOne(@Param('movieId') movieId: string) {
    return this.moviesService.findOne(movieId);
  }
}
