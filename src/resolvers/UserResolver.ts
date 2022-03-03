import { Resolver, Mutation, Arg, Int, Query } from 'type-graphql'

@Resolver()
export default class UserResolver {
    // Register User Mutation
    @Mutation()
    public async registerUser() {}

    // Login User Mutation
    @Mutation()
    public async loginUser() {}

    // Logout User Mutation
    @Mutation()
    public async logoutUser() {}

    // Get Own User Data Query
    @Query()
    public async getOwnUser() {}

    // Get Any User Data Query
    @Query()
    public async getAnyUser() {}

    // Get Many User Data
    @Query()
    public async getManyUser() {}

    // Verify User Email Mutation
    @Mutation()
    public async verifyUser() {}

    // Forget User Password Mutation
    @Mutation()
    public async forgetPasswordUser() {}

    // Change User Password Mutation
    @Mutation()
    public async changePasswordUser() {}

    // Update User Settings Mutation
    @Mutation()
    public async updateOwnUser() {}

    // Delete User Mutation
    @Mutation()
    public async deleteOwnUser() {}
}
