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

  async getUserDetail(userid: string): Promise<any> {
    try {
      const user = await lastValueFrom(
        this.httpService
          .get(`${process.env.USERS_API}/${userid}.json`, {
            headers: {
              Accept: 'application/json',
            },
          })
          .pipe(map((response) => response.data)),
      );

      const { pull_requests } = user;

      const sorted_desc_pull_request = pull_requests.sort(
        (pullA: any, pullB: any) =>
          new Date(pullB.created_at).valueOf() -
          new Date(pullA.created_at).valueOf(),
      );
      user.pull_requests = sorted_desc_pull_request;
      return user;
    } catch (error) {
      throw new ForbiddenException('API not available');
    }
  }
}
