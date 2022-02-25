import { Field, InputType, Int } from 'type-graphql'
import { Category } from '../entity/Category'

@InputType()
export class MovieCreateInput {
    @Field()
    title: string

    @Field(() => Int)
    minutes: number

    @Field(() => Int)
    categoryId!: number
}

@InputType()
export class MovieUpdateInput {
    @Field(() => String, { nullable: true })
    title?: string

    @Field(() => Int, { nullable: true })
    minutes?: number
}
