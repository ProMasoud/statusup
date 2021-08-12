import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getPageData(data: object = {}) {
    return {
      app_name: process.env.APP_NAME,
      app_desc: process.env.APP_DESC,
      ...data
    };
  }
}
