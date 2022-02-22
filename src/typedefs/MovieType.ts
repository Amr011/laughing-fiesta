import { Field, Int, ObjectType } from 'type-graphql'

@ObjectType()
export class MovieType {
   @Field(() => Int)
   id: number

   @Field()
   title: string

   @Field(() => Int)
   minutes: number
}
