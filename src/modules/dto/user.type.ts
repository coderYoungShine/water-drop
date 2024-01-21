import { Field, ObjectType } from '@nestjs/graphql';

@ObjectType()
export class UserType {
  @Field()
  id: string;
  @Field()
  name: string;
  @Field({ description: '账户信息' })
  des: string;
  @Field()
  account: string;
}
