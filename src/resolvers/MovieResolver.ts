import {
   Resolver,
   Mutation,
   Arg,
   Int,
   Query,
   InputType,
   Field,
   FieldResolver,
   Root,
} from 'type-graphql'
import { Movie } from '../entity/Movie'

import movieController from '../controllers/MovieController'

import { MovieUpdateInput, MovieCreateInput } from '../typedefs/MovieInput'
import { CategoryCreateInput } from '../typedefs/CategoryInput'
import { Category } from '../entity/Category'

@Resolver()
export class MovieResolver {
   // Get Many Movies Data Query
   @Query(() => [Movie])
   public async getManyMovieData(): Promise<Movie[]> {
      return await new movieController().getManyMovie()
   }

   // Create One Movie Data Mutation
   @Mutation((_type) => Movie)
   public async createMovie(
      @Arg('options', () => MovieCreateInput) options: MovieCreateInput,
   ) {
      console.log(options.categoryId)
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

   @Mutation((_type) => Boolean)
   public async createCategory(
      @Arg('data', () => CategoryCreateInput) data: CategoryCreateInput,
   ) {
      const category = await Category.create(data).save()
      return true
   }

   @Query((__type) => [Category])
   public async getManyCategoryData() {
      const category = await Category.find({
         relations: ['movie'],
      })
      return category
   }
}
