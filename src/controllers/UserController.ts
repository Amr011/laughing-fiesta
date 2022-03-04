import { User } from '../entity/User'
import errorHandler from '../middlewares/error-handling'
import { UserLoginInput, UserRegisterInput } from '../typedefs/User'

import { hash, compare } from 'bcryptjs'

export default class UserController {
    public getManyUser = async function (
        takeRows?: number,
        skipRows?: number,
    ): Promise<User[]> {
        return await errorHandler(
            await User.find({
                take: takeRows,
                skip: skipRows,
            }),
        )
    }
    public getOneUser = async function (id: number): Promise<User> {
        return await errorHandler(
            await User.findOne({
                where: { id },
            }),
        )
    }
    public registerUser = async function (
        input: UserRegisterInput,
    ): Promise<boolean> {
        let existedUser: string | undefined
        await errorHandler(
            await User.findOne({
                where: { email: input.email },
                select: ['email'],
            }),
        ).then((user) => {
            existedUser = user
        })
        if (existedUser) return false
        await errorHandler(
            await hash(input.password, 12).then((hashedPass) => {
                input.password = hashedPass
                User.create(input).save()
            }),
        )
        return true
    }
    public loginUser = async function (
        input: UserLoginInput,
    ): Promise<boolean> {
        return true
    }
    public logoutUser = async function () {}
}
