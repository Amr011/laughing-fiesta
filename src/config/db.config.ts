import 'reflect-metadata'

import dotenv from 'dotenv'
dotenv.config()

import { createConnection, getConnection } from 'typeorm'
import { __prod__ } from '../utils/Constant'

export default async function connectDatabase(): Promise<void> {
    await createConnection({
        type: 'postgres',
        host: 'localhost',
        port: 5432,
        username: 'postgres',
        password: 'Amr123',
        database: 'typeOrmFirstPG',
        entities: ['src/entity/**/*.[tj]s'],
        migrations: ['src/migration/**/*.[tj]s'],
        subscribers: ['src/subscriber/**/*.[tj]s'],
        cli: {
            entitiesDir: 'src/entity/**/*.[tj]s',
            migrationsDir: 'src/entity/**/*.[tj]s',
            subscribersDir: 'src/entity/**/*.[tj]s',
        },
        synchronize: true,
        dropSchema: !__prod__,
        logging: true,
    })
}
