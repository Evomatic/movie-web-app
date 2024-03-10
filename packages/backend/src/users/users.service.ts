import { Body, Injectable, Post } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { PrismaService } from 'src/prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaService) {}
  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.prisma.user.create({ data: createUserDto });
  }

  findOne(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
      include: { favorites: true },
    });
  }

  findOneById(userId: string) {
    return this.prisma.user.findUnique({
      where: { userId },
    });
  }
}
