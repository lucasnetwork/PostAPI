const express = require('express')
const consign = require('consign')
const app = express()
const DB = require('./config/DB')


app.db = DB
consign()
    .then('./api/validation.js')
    .then('./api')
    .then('./config/middlewares.js')
    .then('./config/routes.js')
    .into(app)
app.listen(3000,()=>{
    console.log("Backend executando")
})