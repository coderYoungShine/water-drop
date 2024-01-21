import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class UserInput {
  @Field()
  name: string;
  @Field()
  des: string;
  @Field()
  password: string;
  @Field()
  account: string;
}
