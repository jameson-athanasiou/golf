import { mapKeys, snakeCase, camelCase } from 'lodash'
import { Course, Resolvers } from '../../types.generated'

const resolvers: Resolvers = {
  Mutation: {
    addCourse: async (_, { input }, context) => {
      const payload = mapKeys(input, (value, key) => snakeCase(key))
      const result = await context.dataSources.databaseApi.addCourse(payload)
      return result
    },
  },
  Query: {
    getCourses: async (_, __, context) => {
      const result = await context.dataSources.databaseApi.getCourses()
      return result.map((course: Course) => mapKeys(course, (value, key) => camelCase(key)))
    },
  },
}

export default resolvers
