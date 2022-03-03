import { User } from '../entity/User'
import errorHandler from '../middlewares/error-handling'

export default class UserController {
    public getManyUser = async function () {
        return await errorHandler(await User.find({}))
    }
}
