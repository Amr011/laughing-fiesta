import { Movie } from '../entity/Movie'

import errorHandler from '../middlewares/error-handling'
import { MovieCreateInput, MovieUpdateInput } from '../typedefs/Movie'

export default class MovieController {
    public getManyMovie = async function (): Promise<Movie[]> {
        return await errorHandler(
            await Movie.find({
                relations: ['category'],
            }),
        )
    }
    public getOneMovie = async function (id: number): Promise<Movie> {
        return await errorHandler(
            await Movie.findOne({
                where: { id },
                relations: ['category'],
            }),
        )
    }
    public createOneMovie = async function (
        input: MovieCreateInput,
    ): Promise<boolean> {
        await errorHandler(await Movie.create(input).save())
        return true
    }

    public updateOneMovie = async function (
        id: number,
        input: MovieUpdateInput,
    ): Promise<boolean> {
        await errorHandler(await Movie.update({ id }, input))
        return true
    }

    public deleteOneMovie = async function (id: number): Promise<boolean> {
        await errorHandler(await Movie.delete({ id }))
        return true
    }
}
