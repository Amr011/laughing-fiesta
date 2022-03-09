import { Resolver, Mutation, Ctx, Arg, Int, Query } from 'type-graphql'
import UserController from '../controllers/UserController'
import { User } from '../entity/User'
import { UserLoginInput, UserRegisterInput } from '../typedefs/User'
import { MyContext } from '../types/MyContext'

@Resolver()
export class UserResolver {
    // Register User Mutation
    @Mutation((_type) => Boolean)
    public async registerUser(
        @Arg('input', () => UserRegisterInput)
        input: UserRegisterInput,
    ): Promise<boolean> {
        return await new UserController().registerUser(input)
    }

    // Login User Mutation
    @Mutation((_type) => Boolean)
    public async loginUser(
        @Arg('input', () => UserLoginInput)
        input: UserLoginInput,
        @Ctx() { res }: MyContext,
    ): Promise<boolean> {
        return await new UserController().loginUser(input)
    }

    // // Logout User Mutation
    // @Mutation()
    // public async logoutUser() {
    //     return true
    // }

    // // Get Own User Data Query
    // @Query()
    // public async getOwnUser() {
    //     return true
    // }

    // Get Any User Data Query
    @Query((_type) => User)
    public async getAnyUser(
        @Arg('id', () => Int) userId: number,
    ): Promise<User> {
        return await new UserController().getOneUser(userId)
    }

    // Get Many User Data
    @Query((_type) => [User])
    public async getManyUser(
        @Arg('skip', () => Int, { nullable: true }) skip: number,
        @Arg('take', () => Int, { nullable: true }) take: number,
    ): Promise<User[]> {
        return await new UserController().getManyUser(take, skip)
    }

    // // Verify User Email Mutation
    // @Mutation()
    // public async verifyUser() {
    //     return true
    // }

    // // Forget User Password Mutation
    // @Mutation()
    // public async forgetPasswordUser() {
    //     return true
    // }

    // // Change User Password Mutation
    // @Mutation()
    // public async changePasswordUser() {
    //     return true
    // }

    // // Update User Settings Mutation
    // @Mutation()
    // public async updateOwnUser() {
    //     return true
    // }

    // // Delete User Mutation
    // @Mutation()
    // public async deleteOwnUser() {
    //     return true
    // }
}
