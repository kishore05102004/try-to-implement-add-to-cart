const express = require('express')

const bodyparser = require('body-parser')

const api = require("./routes/api")

const cors = require('cors')

const app = express()

app.use(bodyparser.json())

app.use(cors())

app.use('/api',api)

app.get('/',(req,res)=>{
    res.send("hello")
})

app.listen(2000,function(){
    console.log('localhost:2000')
})