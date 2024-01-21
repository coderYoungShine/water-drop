import { Controller, Get } from '@nestjs/common';
import { UserService } from './modules/user/user.service';

@Controller()
export class AppController {
  constructor(private readonly userService: UserService) {}

  @Get('/create')
  async create() {
    return await this.userService.create({
      name: 'mike',
      des: 'this is des',
      tel: '1588888888',
      password: '123123',
      account: 'admin',
    });
  }

  @Get('/del')
  async del() {
    return await this.userService.del('3e0e5d5f-b051-43fc-a4dc-453b5bc11b66');
  }

  @Get('/update')
  async update() {
    return await this.userService.update(
      'da244e18-5168-4f0f-a840-cdc2fc3b5478',
      {
        name: 'mike1111',
        des: 'this is des',
        tel: '1588888888',
        password: '123123',
        account: 'admin',
      },
    );
  }

  @Get('/find')
  async find() {
    return await this.userService.find('da244e18-5168-4f0f-a840-cdc2fc3b5478');
  }
}
