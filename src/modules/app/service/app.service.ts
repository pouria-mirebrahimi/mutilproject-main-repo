import { Injectable } from '@nestjs/common';
import { User } from '@submodule/entity/user/user.entity';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }
}
