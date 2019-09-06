
const Pool = require('pg').Pool
const pool = new Pool({
  user: 'gdocntlcloud',
  host: 'gdocntl-genie-test.cu39jkxhedlx.us-east-1.rds.amazonaws.com',
  database: 'gdocntlgenietest',
  password: 'Genie123',
  port: 5432,
})
const getUsers = (request, response) => {
  pool.query('SELECT * FROM public.users', (error, results) => {
    if (error) {
      throw error
    }
    response.status(200).json(results.rows)
  })
}




module.exports = {
  getUsers,
  getUserById,
}