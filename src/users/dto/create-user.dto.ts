/* eslint-disable prettier/prettier */
import { IsString, MinLength, MaxLength } from 'class-validator';
/* eslint-disable prettier/prettier */
export class CreateUserDto {
  @IsString()
  @MinLength(1)
  @MaxLength(20)
  readonly username: string;
  @IsString()
  @MinLength(5)
  @MaxLength(20)
  readonly password: string;
}
