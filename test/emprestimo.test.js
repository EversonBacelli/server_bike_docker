const {Emprestimo} = require('../src/model/Emprestimo.js')
const {Cliente, Status} = require('../src/model/Cliente.js')
const {Bike, statusBike} = require('../src/model/Bike.js')

let listaEmprestimos = []

beforeAll( ()=>{
    Cliente.gerarClientes()
    Bike.gerarBikes()
    Emprestimo.gerarEmprestimos()
    listaEmprestimos = Emprestimo.EMPRESTIMOS
})

test('Estrutura da classe Emprestimo', ()=>{
    expect(listaEmprestimos[0]).toHaveProperty('numeroEmprestimo')
    expect(listaEmprestimos[0]).toHaveProperty('dataEmprestimo')
    expect(listaEmprestimos[0]).toHaveProperty('dataDevolucao')
    expect(listaEmprestimos[0]).toHaveProperty('valorTotal')
    expect(listaEmprestimos[0]).toHaveProperty('statusEmprestimo')
    expect(listaEmprestimos[0]).toHaveProperty('cliente')
    expect(listaEmprestimos[0]).toHaveProperty('bike')

    expect(listaEmprestimos[0]).toHaveProperty('numeroEmprestimo', 1)
    expect(listaEmprestimos[0]).toHaveProperty('dataEmprestimo', 1743505200000)
    expect(listaEmprestimos[0]).toHaveProperty('dataDevolucao', 1743512400000)
    expect(listaEmprestimos[0]).toHaveProperty('valorTotal', 40)
    expect(listaEmprestimos[0]).toHaveProperty('statusEmprestimo', 'Em aberto')
    expect(listaEmprestimos[0]).toHaveProperty('cliente', '000.000.000-00')
    expect(listaEmprestimos[0]).toHaveProperty('bike','B001')
})

test('Validar método estático getEmprestimos', ()=>{
    let emprestimos = Emprestimo.getEmprestimos()
    expect(emprestimos.length).toBe(50)
})

test('Validar método estático getEmprestimo', ()=>{
    let emprestimos = Emprestimo.getEmprestimo(1)
    expect(emprestimos.length).not.toBeNull()
})

test('Validar método estático calcValor', ()=>{
    const valor = Emprestimo.calcValor(1743505200000, 1743512400000)
    expect(valor).toBe(40)
})

test('Validar método estático getEmprestimos por cliente', ()=>{
    let emprestimos = Emprestimo.getEmprestimosPorCLiente('000.000.000-00')
    expect(emprestimos).not.toBeNull()
    expect(emprestimos[0].cliente).toBe('000.000.000-00')
})

test('Validar método estático getEmprestimos por bike', ()=>{
    let emprestimos = Emprestimo.getEmprestimosPorBikes("B005")
    expect(emprestimos).not.toBeNull()
    expect(emprestimos[0].bike).toBe("B005")
})

test('Validar método estático validarCliente', ()=>{
    expect(() => Emprestimo.validarCliente('154.000.000-00')).toThrow("Cliente não existe");
    
    let cliente = Cliente.getCliente('000.000.000-00')
    cliente[0].status = Status.S2
    expect(() => Emprestimo.validarCliente(cliente[0].cpf)).toThrow("Cliente inativo");
})

test('Validar método estático validarBike', ()=>{
    expect(() => Emprestimo.validarBike('000C')).toThrow("Bike não existe no sistema");
    
    let bike = Bike.getBike("B006")
    bike[0].status = statusBike.S2
    expect(() => Emprestimo.validarBike(bike[0].codigo)).toThrow("Bike indisponível");

})