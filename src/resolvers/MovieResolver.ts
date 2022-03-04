import { Resolver, Mutation, Arg, Int, Query } from 'type-graphql'
import { Movie } from '../entity/Movie'

import movieController from '../controllers/MovieController'
import { MovieUpdateInput, MovieCreateInput } from '../typedefs/Movie'

@Resolver()
export class MovieResolver {
    // Get Many Movies Data Query
    @Query((_type) => [Movie])
    public async getManyMovie(): Promise<Movie[]> {
        return await new movieController().getManyMovie()
    }

    // Get One Movies Data Query
    @Query((_type) => Movie)
    public async getOneMovie(
        @Arg('id', () => Int)
        id: number,
    ): Promise<Movie> {
        return await new movieController().getOneMovie(id)
    }

    // Create One Movie Data Mutation
    @Mutation((_type) => Boolean)
    public async createMovie(
        @Arg('input', () => MovieCreateInput)
        input: MovieCreateInput,
    ): Promise<boolean> {
        return await new movieController().createOneMovie(input)
    }

    // Update One Movie Data By Id  Mutation
    @Mutation((_type) => Boolean)
    public async updateMovie(
        @Arg('id', () => Int)
        id: number,
        @Arg('input', () => MovieUpdateInput)
        input: MovieUpdateInput,
    ): Promise<boolean> {
        return await new movieController().updateOneMovie(id, input)
    }

    // Delete One Movie Data By Id  Mutation
    @Mutation((_type) => Boolean)
    public async deleteMovie(
        @Arg('id', () => Int)
        id: number,
    ): Promise<boolean> {
        return await new movieController().deleteOneMovie(id)
    }
}
