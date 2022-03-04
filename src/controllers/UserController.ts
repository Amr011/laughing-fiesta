import { User } from '../entity/User'
import errorHandler from '../middlewares/error-handling'
import { UserLoginInput, UserRegisterInput } from '../typedefs/UserInput'

import { hash, compare } from 'bcryptjs'

export type typeSkipTake = number | undefined
export default class UserController {
    public getManyUser = async function (
        take: typeSkipTake,
        skip: typeSkipTake,
    ): Promise<User[]> {
        return await errorHandler(
            await User.find({
                take,
                skip,
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
        await errorHandler(
            await hash(input.password, 12).then(
                (hashedPass) => (input.password = hashedPass),
            ),
        )
        if (!existedUser) {
            await errorHandler(await User.create(input).save())
            return true
        } else return false
    }
    public loginUser = async function (
        input: UserLoginInput,
    ): Promise<boolean> {
        return true
    }
    public logoutUser = async function () {}
}
