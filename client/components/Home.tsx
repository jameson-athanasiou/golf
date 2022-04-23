import React from 'react'
import { useQuery, gql } from '@apollo/client'

const SOMETHING = gql`
  query something {
    something {
      status
    }
  }
`

const Home = () => {
  const { loading, error, data } = useQuery(SOMETHING)

  console.log(data)

  return <div>{JSON.stringify(data)}</div>
}

export default Home
