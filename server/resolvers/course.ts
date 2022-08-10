import { mapKeysToClientFormat, mapKeysToDatabaseFormat } from '../utils/database'
import { Resolvers } from '../../types.generated'

const resolvers: Resolvers = {
  Mutation: {
    addCourse: async (_, { input }, context) => {
      const payload = mapKeysToDatabaseFormat(input)
      const result = await context.dataSources.databaseApi.addCourse(payload)
      return result
    },
  },
  Query: {
    getCourses: async (_, __, context) => {
      const result = await context.dataSources.databaseApi.getCourses()
      return result.map(mapKeysToClientFormat)
    },
  },
}

export default resolvers
