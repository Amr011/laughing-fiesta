import { Category } from '../entity/Category'
import errorHandler from '../middlewares/error-handling'
import { CategoryCreateInput, CategoryUpdateInput } from '../typedefs/Category'

export default class CategoryController {
    public getManyCategory = async function (): Promise<Category[]> {
        return await errorHandler(
            await Category.find({
                relations: ['movie'],
            }),
        )
    }

    public getOneCategory = async function (id: number): Promise<Category> {
        return await errorHandler(
            await Category.findOne({
                where: { id },
                relations: ['movie'],
            }),
        )
    }

    public createOneCategory = async function (
        input: CategoryCreateInput,
    ): Promise<boolean> {
        await errorHandler(await Category.create(input).save())
        return true
    }

    public updateOneCategory = async function (
        id: number,
        input: CategoryUpdateInput,
    ): Promise<boolean> {
        await errorHandler(await Category.update({ id }, input))
        return true
    }

    public deleteOneCategory = async function (id: number): Promise<boolean> {
        await errorHandler(await Category.delete({ id }))
        return true
    }
}
