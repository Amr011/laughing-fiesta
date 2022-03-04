import { Field, InputType, Int } from 'type-graphql'

@InputType()
export class UserRegisterInput {
    @Field()
    firstname: string

    @Field()
    lastname: string

    @Field()
    email: string

    @Field()
    password: string
}

@InputType()
export class UserLoginInput {
    @Field()
    email: string

    @Field()
    password: string
}

@InputType()
export class UserUpdateInput {
    @Field()
    firstname?: string

    @Field()
    lastname?: string

    @Field()
    email?: string

    @Field()
    password?: string
}
