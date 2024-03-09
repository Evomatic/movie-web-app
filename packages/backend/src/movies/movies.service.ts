import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class MoviesService {
  constructor(private prisma: PrismaService) {}

  findAll() {
    return this.prisma.movie.findMany();
  }

  findOne(movieId: string) {
    return this.prisma.movie.findUnique({ where: { movieId } });
  }
}
