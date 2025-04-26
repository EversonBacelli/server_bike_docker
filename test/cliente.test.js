const {Cliente, Status, gerar10Clientes} = require('../src/model/Cliente.js')

let listaClientes = []

beforeAll( ()=>{
    Cliente.gerarClientes()
    listaClientes = Cliente.CLIENTES
})

// desativar, ativar, getCliente, getClientes, gerarClientes, validarClientes  

test("Validar estrutura classe cliente", () => {
    expect(listaClientes.length).toBe(10)
    
    expect(listaClientes[0]).toHaveProperty("cpf")
    expect(listaClientes[0]).toHaveProperty("nome")
    expect(listaClientes[0]).toHaveProperty("dataNasc")
    expect(listaClientes[0]).toHaveProperty("telefone")
    expect(listaClientes[0]).toHaveProperty("sexo")
    expect(listaClientes[0]).toHaveProperty("endereco")
    expect(listaClientes[0]).toHaveProperty("email")
    expect(listaClientes[0]).toHaveProperty("status")

    expect(listaClientes[0]).toHaveProperty("cpf", '000.000.000-00')
    expect(listaClientes[0]).toHaveProperty("nome", 'João da Silva')
    expect(listaClientes[0]).toHaveProperty("status", 'ATIVO')

})

test('Validar método estático getClientes', ()=>{
    let lista = Cliente.getClientes()
    expect(lista.length).toBe(10)
})

test('Validar métodos desativar e ativar', ()=>{
    listaClientes[0].desativar()
    expect(listaClientes[0]).toHaveProperty('status', Status.S2)

    listaClientes[0].ativar()
    expect(listaClientes[0]).toHaveProperty('status', Status.S1)
})

test('Validar método estático getCliente por cpf', ()=>{
    const cliente = Cliente.getCliente('000.000.000-00')

    expect(cliente[0]).not.toBeNull()
    expect(cliente[0]).toHaveProperty("cpf", '000.000.000-00')
    expect(cliente[0]).toHaveProperty("nome", 'João da Silva')
    expect(cliente[0]).toHaveProperty("status", 'ATIVO')
})

test('Validar método validarCliente', ()=>{
    
    expect(listaClientes[0].validarCliente()).toBe(true)
    listaClientes[0].desativar()
    expect(listaClientes[0].validarCliente()).toBe(false)
})