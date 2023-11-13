import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';
import { IsNotEmpty } from 'class-validator';
@Entity('user')
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  @Column({
    comment: '昵称',
    default: '',
  })
  @IsNotEmpty()
  name: string;

  @Column({
    comment: '描述',
    default: '',
  })
  des: string;

  @Column({
    comment: '手机号',
    nullable: true,
  })
  tel: string;

  @Column({
    comment: '密码',
    nullable: false,
  })
  password: string;

  @Column({
    comment: '账户',
    nullable: true,
  })
  account: string;
}
