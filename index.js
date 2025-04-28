//modulos externos
const express = require('express')
const dotEnv = require('dotenv')

const app = express()
dotEnv.config()

// rotas
const {router_bikes} = require('./src/router/router_bikes.js')
app.use('/', router_bikes )

const { router_cliente } = require('./src/router/router_clientes.js')
app.use('/', router_cliente )

const { router_emprestimo } = require('./src/router/router_emprestimo.js')
app.use('/', router_emprestimo )

const porta = process.env.PORTA
app.listen(porta, console.log(`Operando na porta ${porta}`))