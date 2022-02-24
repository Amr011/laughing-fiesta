import { Category } from '../entity/Category'
import { Movie } from '../entity/Movie'

import errorHandler from '../middlewares/error-handling'

export default class movieController {
   public getManyMovie = async function (): Promise<Movie[]> {
      return errorHandler(
         Movie.find({
            relations: ['category'],
         }),
      )
   }
}
