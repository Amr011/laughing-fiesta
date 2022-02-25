import { Field, InputType, Int } from 'type-graphql'

@InputType()
export class CategoryCreateInput {
    @Field(() => String)
    title: string
}

@InputType()
export class CategoryUpdateInput {
    @Field(() => String, { nullable: true })
    title?: string
}
