import { gql } from 'apollo-server-hapi'

export default gql`
  type Golfer {
    firstName: String
    lastName: String
    handicap: String
  }

  input AddGolferInput {
    firstName: String!
    lastName: String!
  }

  type Query {
    getGolfers: [Golfer]
  }

  type Mutation {
    addGolfer(input: AddGolferInput!): Golfer
  }
`
