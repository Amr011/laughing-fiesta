import 'reflect-metadata'
import { ApolloServer } from 'apollo-server-express'
import { ApolloServerPluginLandingPageGraphQLPlayground } from 'apollo-server-core'

import express, { Application, Request, Response, NextFunction } from 'express'

import { buildSchema } from 'type-graphql'

import cookieParser from 'cookie-parser'

import serverConfig from './config/server.config'
import connectDatabase from './config/db.config'

import { MovieResolver } from './resolvers/MovieResolver'

// main function that responsible for initialize the project
async function ServerLuncher(): Promise<void> {
  try {
    const app: Application = express()

    const schema = await buildSchema({
      resolvers: [MovieResolver],
    })

    app.use(cookieParser())

    await connectDatabase()
      .then(() => console.log('Database connected successfully !'))
      .catch((err: any) => console.log(err))

    const server = new ApolloServer({
      schema,
      plugins: [ApolloServerPluginLandingPageGraphQLPlayground()],
      context: ({ req, res }) => ({ req, res }),
    })

    await server.start()
    server.applyMiddleware({ app, cors: true })

    // Unavailable Request
    app.use((_req: Request, res: Response, _next: NextFunction) => {
      res.status(404).json({
        success: false,
        status: res.statusCode,
        message: 'Unavailable Request',
      })
      res.end()
    })

    app.listen(serverConfig.port, async () => {
      console.log(
        `Server is Running on ${serverConfig['host']}${serverConfig['port']}${serverConfig['path']}`
      )
    })
  } catch (err) {
    console.log(err)
  }
}

ServerLuncher()
