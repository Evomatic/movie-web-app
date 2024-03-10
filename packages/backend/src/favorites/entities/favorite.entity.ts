import { favorite } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
export class FavoriteEntity implements favorite {
  @ApiProperty()
  userId: string;

  @ApiProperty()
  movieId: string;
}
