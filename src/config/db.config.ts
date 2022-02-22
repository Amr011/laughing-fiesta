import 'reflect-metadata'

import dotenv from 'dotenv'
dotenv.config()

import { createConnection, getConnection } from 'typeorm'

export default async function connectDatabase(): Promise<void> {
  await createConnection({
    type: 'postgres',
    host: 'localhost',
    port: 5432,
    username: 'postgres',
    password: 'Amr123',
    database: 'typeOrmFirstPG',
    entities: ['src/entity/**/*.ts'],
    migrations: ['src/migration/**/*.ts'],
    subscribers: ['src/subscriber/**/*.ts'],
    cli: {
      entitiesDir: '../entity',
      migrationsDir: '../migration',
      subscribersDir: '../subscriber',
    },
    synchronize: true,
    dropSchema: true,
    logging: true,
  })
}
