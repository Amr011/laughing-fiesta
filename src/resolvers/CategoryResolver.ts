import { Arg, Int, Mutation, Query, Resolver } from 'type-graphql'
import { Category } from '../entity/Category'
import {
    CategoryCreateInput,
    CategoryUpdateInput,
} from '../typedefs/CategoryInput'
import CategoryController from '../controllers/CategoryController'

@Resolver()
export class CategoryResolver {
    // Get Many Category Data
    @Query((__type) => [Category])
    public async getManyCategory(): Promise<Category[]> {
        return await new CategoryController().getManyCategory()
    }

    // Get One Category Data
    @Query((__type) => Category)
    public async getOneCategory(
        @Arg('id', () => Int)
        id: number,
    ): Promise<Category> {
        return await new CategoryController().getOneCategory(id)
    }

    // Create One Category Data
    @Mutation((_type) => Boolean)
    public async createCategory(
        @Arg('input', () => CategoryCreateInput)
        input: CategoryCreateInput,
    ): Promise<boolean> {
        return await new CategoryController().createOneCategory(input)
    }

    // Update One Category Data
    @Mutation((_type) => Boolean)
    public async updateCategory(
        @Arg('id', () => Int)
        id: number,
        @Arg('input', () => CategoryUpdateInput)
        input: CategoryUpdateInput,
    ): Promise<boolean> {
        return await new CategoryController().updateOneCategory(id, input)
    }
    // Delete One Category Data
    @Mutation((_type) => Boolean)
    public async deleteCategory(
        @Arg('id', () => Int)
        id: number,
    ): Promise<boolean> {
        return await new CategoryController().deleteOneCategory(id)
    }
}
