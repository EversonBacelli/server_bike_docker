
class Cliente {
    static CLIENTES = []
    constructor(cpf, nome, dataNasc, telefone, sexo, endereco, email) {
        this.cpf = cpf;
        this.nome = nome;
        this.dataNasc = dataNasc;
        this.telefone = telefone;
        this.sexo = sexo;
        this.endereco = endereco;
        this.email = email;
        this.status = Status.S1; // status inicial padrão
        Cliente.CLIENTES.push(this)
    }

    static getClientes(){
        return Cliente.CLIENTES
    }
    // Método opcional para desativar cliente
    desativar() {
        this.status = Status.S2;
    }

    // Método opcional para reativar cliente
    ativar() {
        this.status = Status.S1;
    }

    static getCliente(cpf){
        let cliente = (Cliente.CLIENTES).filter(cliente => cliente.cpf == cpf)
        return cliente
    }

    static gerarClientes(){
        gerar10Clientes()
    }

    validarCliente(){
        let validar = null
        this.status == 'ATIVO' ? validar = true : validar = false
        return validar
    }


}

class Status{
    static S1 = 'ATIVO'
    static S2 = "INATIVO"
}

function gerar10Clientes() {
    const nomes = [
        'João da Silva', 'Maria Oliveira', 'Carlos Souza', 'Ana Paula',
        'Rafael Lima', 'Juliana Alves', 'Bruno Costa', 'Fernanda Rocha',
        'Lucas Martins', 'Camila Duarte'
    ];

    const sexos = ['Masculino', 'Feminino'];
    const enderecos = [
        'Rua das Flores, 123 - São Paulo, SP',
        'Av. Brasil, 456 - Rio de Janeiro, RJ',
        'Rua A, 789 - Belo Horizonte, MG',
        'Rua das Palmeiras, 101 - Salvador, BA',
        'Rua Central, 55 - Curitiba, PR',
        'Av. Paulista, 900 - São Paulo, SP',
        'Rua Beira Mar, 20 - Recife, PE',
        'Rua das Laranjeiras, 33 - Fortaleza, CE',
        'Rua da Praia, 88 - Porto Alegre, RS',
        'Rua Verde, 77 - Manaus, AM'
    ];

    const clientes = [];

    for (let i = 0; i < 10; i++) {
        const cpf = `000.000.000-0${i}`; // só para exemplo
        const nome = nomes[i];
        const dataNasc = new Date(1985 + Math.floor(Math.random() * 20), Math.floor(Math.random() * 12), Math.floor(Math.random() * 28) + 1);
        const telefone = `(11) 9${Math.floor(100000000 + Math.random() * 899999999)}`;
        const sexo = sexos[i % 2];
        const endereco = enderecos[i];
        const email = `${nome.toLowerCase().replace(' ', '.')}@email.com`;

        const cliente = new Cliente(cpf, nome, dataNasc, telefone, sexo, endereco, email);
        clientes.push(cliente);
    }

    return clientes;
}

module.exports = {Cliente , gerar10Clientes, Status}