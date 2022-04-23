import { SQLDataSource } from 'datasource-sql'

type CourseValues = {
  city: string
  name: string
  state: string
  streetAddress: string
  zipCode: string
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

  addCourse(values: CourseValues) {
    return this.knex('Courses').insert(values)
  }
}

export default DatabaseApi
