import { SQLDataSource } from 'datasource-sql'

type CourseInput = {
  city: string
  name: string
  state: string
  streetAddress: string
  zipCode: string
}

type GolferInput = {
  firstName: string
  lastName: string
}

const knexConfig = {
  client: 'pg',
  connection: {
    host: process.env.PGHOST as string,
    port: process.env.PGPORT as string,
    user: process.env.PGUSER as string,
    password: process.env.PGPASSWORD as string,
    database: process.env.PGDATABASE as string,
  },
}

class DatabaseApi extends SQLDataSource {
  constructor() {
    super(knexConfig)
  }

  getCourses() {
    return this.knex.select('*').from('Courses')
  }

  addCourse(values: CourseInput) {
    return this.knex('Courses').insert(values)
  }

  getGolfers() {
    return this.knex.select('*').from('Golfers')
  }

  addGolfer(values: GolferInput) {
    return this.knex('Golfers').insert(values)
  }
}

export default DatabaseApi
