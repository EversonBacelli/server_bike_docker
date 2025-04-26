// modulos externos
const express = require('express')

// moduloes internos
const { Bike } = require('../model/Bike.js')
Bike.gerarBikes()

const router_bikes = express.Router()

// ler o body da requisição no formato de json
router_bikes.use(
    express.urlencoded({
        extended: true
    })
)

router_bikes.use(express.json())

router_bikes.get('/bikes', (req, res) =>{
    let listBikes = Bike.BIKES
    res.json(listBikes)
})

router_bikes.get('/bike/:codigo', (req, res) =>{
    let codigo = req.params.codigo
    let bike = Bike.getBike(codigo)
    res.json(bike)
})

module.exports = {router_bikes}
