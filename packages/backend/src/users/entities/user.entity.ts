import { user } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';
export class UserEntity implements user {
  @ApiProperty()
  userId: string;

  @ApiProperty()
  email: string;

  @ApiProperty()
  password: string;
}
