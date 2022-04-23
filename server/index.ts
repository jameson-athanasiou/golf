import Hapi from '@hapi/hapi'
import { ApolloServer, ApolloServerPluginStopHapiServer } from 'apollo-server-hapi'

async function startApolloServer(typeDefs, resolvers) {
  const app = Hapi.server({ port: 4000 })
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    plugins: [ApolloServerPluginStopHapiServer({ hapiServer: app })],
  })

  await server.start()
  await server.applyMiddleware({ app })
  await app.start()
}
