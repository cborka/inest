import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('api')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get('/users')
  getUsers() {
    return this.appService.getUsers();
  }


   @Get()
   getHello(): string {
    return '@Controller(\'api\')';
  //   return this.appService.getHello();
   }
}
