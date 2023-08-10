const express = require('express')

const routes = require('./routes.js')

const app = express()

app.use(express.json())

app.use(routes) // Middleware

app.use((error, request, response, next)=>{ // Middleware - Error Handler
    console.log(error)
    response.sendStatus(500)
})


app.listen(3000, ()=>{console.log('Server started at http://localhost:3000')})


