import { v4 as uuidv4 } from 'uuid'
import { mapKeysToClientFormat, mapKeysToDatabaseFormat } from '../utils/database'
import { Resolvers } from '../../types.generated'

const resolvers: Resolvers = {
  Mutation: {
    addGolfer: async (_, { input }, context) => {
      const id = uuidv4()
      const payload = mapKeysToDatabaseFormat(input)
      const result = await context.dataSources.databaseApi.addGolfer({ id, ...payload })
      return result
    },
  },
  Query: {
    getGolfers: async (_, __, context) => {
      const result = await context.dataSources.databaseApi.getGolfers()
      return result.map(mapKeysToClientFormat)
    },
  },
}

export default resolvers
