const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const url = 'mongodb://localhost:27017/incometracking'

const app = express()
const port = 3010

mongoose.connect(url,{useNewUrlParser:true})

const con = mongoose.connection

con.on('open',()=>{
    console.log("connected");
})

app.use(bodyParser.urlencoded({ extended: false}))
app.use(bodyParser.json())

const incomeRouter = require('./routes/income')
app.use('/income',incomeRouter)

const userRouter = require('./routes/user')
app.use('/user',userRouter)

app.listen(port ,()=>{
    console.log(`app listening at http://localhost:${port}`)
})