import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './user.entity';
import { DeepPartial, Repository } from 'typeorm';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private UseRepository: Repository<User>,
  ) {}

  // 新增用户
  async create(entity: DeepPartial<User>): Promise<boolean> {
    const res = await this.UseRepository.insert(entity);
    if (res?.raw?.affectedRows > 0) {
      return true;
    }
    return false;
  }
  // 删除
  async del(id: string): Promise<boolean> {
    const res = await this.UseRepository.delete(id);
    if (res?.affected > 0) {
      return true;
    }
    return false;
  }
  // 更新
  async update(id: string, entity: DeepPartial<User>): Promise<boolean> {
    const res = await this.UseRepository.update(id, entity);
    if (res?.affected > 0) {
      return true;
    }
    return false;
  }

  // 查询
  async find(id: string): Promise<User> {
    const res = await this.UseRepository.findOne({ where: { id } });
    return res;
  }
}
