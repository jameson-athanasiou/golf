import { gql } from 'apollo-server-hapi'

export default gql`
  type Something {
    status: String
  }

  type Query {
    something: Something
  }
`
