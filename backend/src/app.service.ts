import { ForbiddenException, Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { lastValueFrom, map } from 'rxjs';


@Injectable()
export class AppService {
  constructor(private readonly httpService: HttpService) {}

  async getUsers(): Promise<any> {
    try {
      const users = await lastValueFrom(
        this.httpService
          .get(`${process.env.USERS_API}.json`, {
            headers: {
              Accept: 'application/json',
            },
          })
          .pipe(map((response) => response.data)),
      );

      return users.slice(0, 10);
    } catch (error) {
      throw new ForbiddenException('API not available');
    }
  }
}
