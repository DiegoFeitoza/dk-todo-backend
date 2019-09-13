const port = 5005 // Add porta

//Add body parser => Passar todas as instancias de backend para o servidor
const bodyParser = require('body-parser')
//Add Express para o servidor
const express = require('express')
const server = express()
const allowCors = require('./cors')

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())
server.use(allowCors)

server.listen(port, function(){
    console.log(`Rodando BACKEND na porta ${port}`)
})

module.exports = server