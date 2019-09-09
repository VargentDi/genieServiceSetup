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
app.get('/',(req,res)=>{
    res.send("hello world!")
})
app.get('/rowData', async (request, response) => {
    console.log(' you requested')
    await db.getUsers()
    .then(data=>{
        response.send(data);
    })
   

})
app.listen(port, () => {
    console.log(`App running on port ${port}.`)
})