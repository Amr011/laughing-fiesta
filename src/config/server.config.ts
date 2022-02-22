import dotenv from 'dotenv'
dotenv.config()

interface serverConfigTypes {
   host: string
   port: number | string
   path: string
}

const serverConfig: serverConfigTypes = {
   host: process.env.SERVER_HOST || 'http://localhost:',
   port: process.env.SERVER_PORT || '8081',
   path: process.env.SERVER_PATH || '/graphql',
}

export default serverConfig
