import Hapi from '@hapi/hapi'
import { ApolloServer, ApolloServerPluginStopHapiServer } from 'apollo-server-hapi'
import { makeExecutableSchema } from '@graphql-tools/schema'
import typeDefs from './schema'
import resolvers from './resolvers'
import DatabaseApi from './apis/database'

async function startApolloServer() {
  const app = Hapi.server({ port: 4000 })
  const server = new ApolloServer({
    dataSources: () => ({
      databaseApi: new DatabaseApi(),
    }),
    schema: makeExecutableSchema({ typeDefs, resolvers }),
    plugins: [ApolloServerPluginStopHapiServer({ hapiServer: app })],
  })

  await server.start()
  await server.applyMiddleware({ app })
  await app.start()
  console.log('Sever started on port 4000')
}

export default startApolloServer
