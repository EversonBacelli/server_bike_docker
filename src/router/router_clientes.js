// modulos externos
const express = require('express')

// moduloes internos
const { Cliente } = require('../model/Cliente.js')
Cliente.gerarClientes()

const router_cliente = express.Router()

// ler o body da requisição no formato de json
router_cliente.use(
    express.urlencoded({
        extended: true
    })
)

router_cliente.use(express.json())

router_cliente.get('/clientes', (req, res) =>{
    let listClientes = Cliente.CLIENTES
    res.json(listClientes)
})

router_cliente.get('/cliente/:cpf', (req, res) =>{
    let cpf = req.params.cpf
    let cliente = Cliente.getCliente(cpf)
    res.json(cliente)
})

module.exports = {router_cliente}
