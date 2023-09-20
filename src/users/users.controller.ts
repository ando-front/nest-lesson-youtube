import { Body, Controller, Post, Get, ValidationPipe, Param, UseGuards, Req } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UsersService } from './users.service';
import { AuthGuard } from '@nestjs/passport';

@Controller('users')
export class UsersController {
  constructor(private readonly userService: UsersService) {}
  @Get()
  findAll() {
    return this.userService.findAll();
  }
  @Get(':username')
  @UseGuards(AuthGuard('jwt'))
  findOne(@Param('username') username: string, @Req() req: any) {
    req.user;
    return this.userService.findOne(username);
  }

  @Post()
  create(@Body(ValidationPipe) createUser: CreateUserDto) {
    return this.userService.create(createUser);
  }
}
