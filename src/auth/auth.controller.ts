import {
  Body,
  Controller,
  HttpCode,
  HttpException,
  HttpStatus,
  Post,
} from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(HttpStatus.OK)
  @Post('login')
  async signIn(@Body() signInDto: { username: string; password: string }) {
    const result = await this.authService.signIn(
      signInDto.username,
      signInDto.password,
    );
    if (result == null) {
      throw new HttpException('User does not exist', HttpStatus.NOT_FOUND);
    }
    return result;
  }
}
