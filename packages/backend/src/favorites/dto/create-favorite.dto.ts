import { ApiProperty } from '@nestjs/swagger';
export class CreateFavoriteDto {
  @ApiProperty()
  userId: string;

  @ApiProperty()
  movieId: string;
}
