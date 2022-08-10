import { gql } from 'apollo-server-hapi'

export default gql`
  type Course {
    name: String
    streetAddress: String
    city: String
    state: String
    zipCode: String
  }

  input AddCourseInput {
    name: String!
    streetAddress: String!
    city: String!
    state: String!
    zipCode: String!
  }

  type Query {
    getCourses: [Course]
  }

  type Mutation {
    addCourse(input: AddCourseInput!): [Course]
  }
`
