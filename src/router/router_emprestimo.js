const express = require('express');
const {Emprestimo} = require('../model/Emprestimo.js')


const router_emprestimo = express.Router();
Emprestimo.gerarEmprestimos()

// Rota para listar todas as bikes disponíveis para empréstimo
router_emprestimo.get('/emprestimos', (req, res) => {
    let emprestimos = Emprestimo.getEmprestimos()
    res.status(200).json(emprestimos);
});

// Rota para emprestar uma bike
router_emprestimo.get('/emprestimo/:numero', (req, res) => {
   let numero = req.params.numero
    let emprestimo = Emprestimo.getEmprestimo(numero)
    if (emprestimo) {
        res.status(200).json(emprestimo);
    } else {
        res.status(404).json({ message: 'Empréstimo não encontrado' });
    }
});

// Rota para devolver uma bike
router_emprestimo.get('/emprestimo/cliente/:cpf', (eq, res) => {
    let cpf = req.params.cpf
    let emprestimo = Emprestimo.getEmprestimosPorCLiente(cpf)
    if (emprestimo) {
        emprestimo.devolver(cpf)
        res.status(200).json(emprestimo);
    } else {
        res.status(404).json({ message: 'Empréstimo não encontrado' });
    }
});

// Rota para colocar uma bike em manutenção
router_emprestimo.get('/emprestimo/bike/:codigo', (req, res) => {
    let codigo = req.params.codigo
    let emprestimo = Emprestimo.getEmprestimosPorBikes(codigo)
    if (emprestimo) {
        emprestimo.emManutencao(codigo)
        res.status(200).json(emprestimo);
    } else {
        res.status(404).json({ message: 'Empréstimo não encontrado' });
    }
});


module.exports = {router_emprestimo};