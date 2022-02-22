import { buildSchema } from 'type-graphql'

import { MovieResolver } from '../resolvers/MovieResolver'

export default async () => {
  const schema = await buildSchema({
    resolvers: [MovieResolver],
  })
}
