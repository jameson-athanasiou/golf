import React from 'react'
import { useQuery, gql } from '@apollo/client'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableHead from '@mui/material/TableHead'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import Header from './Header'

const GET_COURSES = gql`
  query GetCourses {
    getCourses {
      name
      streetAddress
      city
      state
      zipCode
    }
  }
`

type Row = {
  name: string
  streetAddress: string
  city: string
  state: string
  zipCode: string
}

const Home = () => {
  const { data = {} } = useQuery(GET_COURSES)

  console.log(data.getCourses)

  return (
    <>
      <Header />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align="right">Street Address</TableCell>
              <TableCell align="right">City</TableCell>
              <TableCell align="right">State</TableCell>
              <TableCell align="right">Zip Code</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {(data.getCourses || []).map((row: Row) => (
              <TableRow key={row.name} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.streetAddress}</TableCell>
                <TableCell align="right">{row.city}</TableCell>
                <TableCell align="right">{row.state}</TableCell>
                <TableCell align="right">{row.zipCode}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}

export default Home
