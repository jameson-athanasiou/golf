import Hapi from '@hapi/hapi'
import { ApolloServer, ApolloServerPluginStopHapiServer } from 'apollo-server-hapi'
import typeDefs from './schema'
import resolvers from './resolvers'

async function startApolloServer() {
  const app = Hapi.server({ port: 4000 })
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginStopHapiServer({ hapiServer: app })],
  })

  await server.start()
  await server.applyMiddleware({ app })
  await app.start()
  console.log('Sever started on port 4000')
}

export default startApolloServer
