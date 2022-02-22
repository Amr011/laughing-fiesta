import {
   Resolver,
   Mutation,
   Arg,
   Int,
   Query,
   InputType,
   Field,
} from 'type-graphql'
import { Movie } from '../entity/Movie'
import { MovieType } from '../typedefs/MovieType'

import movieController from '../controllers/MovieController'

import { MovieUpdateInput, MovieCreateInput } from '../typedefs/MovieInput'

@Resolver()
export class MovieResolver {
   // Get Many Movies Data Query
   @Query(() => [MovieType])
   public async getManyMovieData(): Promise<MovieType[]> {
      return await new movieController().getManyMovie()
   }

   // Create One Movie Data Mutation
   @Mutation((_type) => MovieType)
   public async createMovie(
      @Arg('options', () => MovieCreateInput) options: MovieCreateInput,
   ) {
      const movie = await Movie.create(options).save()
      return movie
   }

   // Update One Movie Data By Id  Mutation
   @Mutation((_type) => Boolean)
   public async updateMovie(
      @Arg('id', () => Int) id: number,
      @Arg('input', () => MovieUpdateInput) input: MovieUpdateInput,
   ) {
      await Movie.update({ id }, input)
      return true
   }

   // Delete One Movie Data By Id  Mutation
   @Mutation((_type) => Boolean)
   public async deleteMovie(@Arg('id', () => Int) id: number) {
      await Movie.delete({ id })
      return true
   }
}
