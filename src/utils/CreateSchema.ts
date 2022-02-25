import { buildSchema } from 'type-graphql'
import { MovieResolver } from '../resolvers/MovieResolver'

export const createSchema = () =>
    buildSchema({
        resolvers: [MovieResolver],
    })
