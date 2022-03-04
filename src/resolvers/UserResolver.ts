import { Resolver, Mutation, Arg, Int, Query } from 'type-graphql'
import UserController from '../controllers/UserController'
import { User } from '../entity/User'
import { UserRegisterInput } from '../typedefs/UserInput'

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

    // // Login User Mutation
    // @Mutation()
    // public async loginUser() {
    //     return true
    // }

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

    // // Get Any User Data Query
    // @Query()
    // public async getAnyUser() {
    //     return true
    // }

    // Get Many User Data
    @Query((_type) => [User])
    public async getManyUser(): Promise<User[]> {
        return await new UserController().getManyUser(2)
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
