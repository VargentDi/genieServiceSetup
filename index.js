const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3002;
const db=require('./db')


app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.get('/', (request, response) => {
    console.log(' you requested')
    let responseData=db.getUsers();
    response.send(responseData)

})
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})