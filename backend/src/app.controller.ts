import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';

@Controller("users")
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getUsers(): any {
    return this.appService.getUsers();
  }

  @Get(':userid')
  getUserDetail(@Param('userid') userid: string): any {
    return this.appService.getUserDetail(userid);
  }
}
