
const Pool = require('pg').Pool
const pool = new Pool({
    user: 'gdocntlcloud',
    host: 'gdocntl-genie-test.cu39jkxhedlx.us-east-1.rds.amazonaws.com',
    database: 'gdocntlgenietest',
    password: 'Genie123',
    port: 5432,
})
const getUsers = () => {
    console.log('you called the db fetch function')
    pool.query('SELECT * FROM public.users', (error, results) => {
        if (error) {
            console.log(error)
        }
        console.log(results)
        
    })
    return results;
}


getUsers()

module.exports = {
    getUsers,
}