import { Resolver, Mutation, Arg, Int, Query, InputType, Field } from 'type-graphql'
import { Movie } from '../entity/Movie'

import movieController from '../controllers/MovieController'

@InputType()
class MovieInput {
  @Field()
  title: string

  @Field(() => Int)
  minutes: number
}

@InputType()
class MovieUpdateInput {
  @Field(() => String, { nullable: true })
  title?: string

  @Field(() => Int, { nullable: true })
  minutes?: number
}

@Resolver()
export class MovieResolver {
  @Mutation((_type) => Movie)
  public async createMovie(@Arg('options', () => MovieInput) options: MovieInput) {
    const movie = await Movie.create(options).save()
    return movie
  }

  @Mutation((_type) => Boolean)
  public async updateMovie(
    @Arg('id', () => Int) id: number,
    @Arg('input', () => MovieUpdateInput) input: MovieUpdateInput
  ) {
    await Movie.update({ id }, input)
    return true
  }

  @Mutation((_type) => Boolean)
  public async deleteMovie(@Arg('id', () => Int) id: number) {
    await Movie.delete({ id })
    return true
  }

  @Query(() => [Movie])
  public async getManyMovieData(): Promise<Movie[]> {
    return await new movieController().getManyMovie()
  }
}
