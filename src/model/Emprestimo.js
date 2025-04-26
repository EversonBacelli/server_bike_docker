const {Bike} = require('./Bike.js')
const {Cliente} = require('./Cliente.js')

class Emprestimo {
    static EMPRESTIMOS = []
    static VALORBASE = 20.00
    
    constructor(numeroEmprestimo, dataEmprestimo, dataDevolucao, cpfCliente, numeroBike) {
        this.numeroEmprestimo = numeroEmprestimo;
        this.dataEmprestimo = new Date(dataEmprestimo).getTime();
        this.dataDevolucao = new Date(dataDevolucao).getTime();
        this.valorTotal = Emprestimo.calcValor(this.dataEmprestimo, this.dataDevolucao)
        this.statusEmprestimo = statusEmprestimo.SE1;
        
        Emprestimo.validarCliente(cpfCliente)
        this.cliente = cpfCliente
        
        Emprestimo.validarBike(numeroBike)
        this.bike = numeroBike
        
        Emprestimo.EMPRESTIMOS.push(this)
    }
    
    static getEmprestimos(){
        return Emprestimo.EMPRESTIMOS
    }

    static getEmprestimo(numero){
        let emprestimo = (Emprestimo.EMPRESTIMOS).filter(e => e.numeroEmprestimo == numero)
            return emprestimo
    }

    static calcValor(dataInicial, dataFinal){
        let diferencaMillisegundos = Math.abs(dataFinal - dataInicial)
        let horas = diferencaMillisegundos / (1000*60*60) 
        return horas * Emprestimo.VALORBASE
    }

    static validarCliente(cpf){
        let cliente = Cliente.getCliente(cpf)
        if(cliente.length == 0){ throw new Error("Cliente não existe");} 

        let validar = cliente[0].validarCliente()
        if(!validar){ throw new Error("Cliente inativo");}
    }

    static validarBike(numeroBike){
        let bike = Bike.getBike(numeroBike)
        if(bike.length == 0){ throw new Error("Bike não existe no sistema");} 

        let validar = bike[0].validarBike()
        if(!validar){ throw new Error("Bike indisponível");}
    }

    static getEmprestimosPorCLiente(cpf){
        let listaEmprestimos = (Emprestimo.EMPRESTIMOS).filter( e => e.cliente == cpf )
        return listaEmprestimos
    }

    static getEmprestimosPorBikes(numero){
        let listaEmprestimos = (Emprestimo.EMPRESTIMOS).filter( e => e.bike == numero )
        return listaEmprestimos
    }

    static gerarEmprestimos(){
        let clientes = Cliente.CLIENTES
        let bikes = Bike.BIKES

        new Emprestimo(1, '2025-04-01T08:00:00', '2025-04-01T10:00:00', clientes[0].cpf, bikes[0].codigo);
        new Emprestimo(2, '2025-04-02T09:30:00', '2025-04-02T11:00:00', clientes[1].cpf, bikes[1].codigo);
        new Emprestimo(3, '2025-04-03T07:00:00', '2025-04-03T09:30:00', clientes[2].cpf, bikes[2].codigo);
        new Emprestimo(4, '2025-04-04T10:15:00', '2025-04-04T13:00:00', clientes[3].cpf, bikes[3].codigo);
        new Emprestimo(5, '2025-04-05T14:00:00', '2025-04-05T16:30:00', clientes[4].cpf, bikes[4].codigo);
        new Emprestimo(6, '2025-04-06T08:45:00', '2025-04-06T10:15:00', clientes[5].cpf, bikes[5].codigo);
        new Emprestimo(7, '2025-04-07T09:00:00', '2025-04-07T12:00:00', clientes[6].cpf, bikes[6].codigo);
        new Emprestimo(8, '2025-04-08T13:30:00', '2025-04-08T15:30:00', clientes[7].cpf, bikes[7].codigo);
        new Emprestimo(9, '2025-04-09T07:15:00', '2025-04-09T08:45:00', clientes[8].cpf, bikes[8].codigo);
        new Emprestimo(10, '2025-04-10T11:00:00', '2025-04-10T14:00:00', clientes[9].cpf, bikes[9].codigo);

        new Emprestimo(11, '2025-04-11T10:00:00', '2025-04-11T12:00:00', clientes[0].cpf, bikes[10].codigo);
        new Emprestimo(12, '2025-04-12T07:30:00', '2025-04-12T09:30:00', clientes[1].cpf, bikes[11].codigo);
        new Emprestimo(13, '2025-04-13T09:45:00', '2025-04-13T11:45:00', clientes[2].cpf, bikes[12].codigo);
        new Emprestimo(14, '2025-04-14T08:00:00', '2025-04-14T11:00:00', clientes[3].cpf, bikes[13].codigo);
        new Emprestimo(15, '2025-04-15T06:30:00', '2025-04-15T08:30:00', clientes[4].cpf, bikes[14].codigo);
        new Emprestimo(16, '2025-04-16T10:30:00', '2025-04-16T13:00:00', clientes[5].cpf, bikes[15].codigo);
        new Emprestimo(17, '2025-04-17T07:45:00', '2025-04-17T10:15:00', clientes[6].cpf, bikes[16].codigo);
        new Emprestimo(18, '2025-04-18T12:00:00', '2025-04-18T14:30:00', clientes[7].cpf, bikes[17].codigo);
        new Emprestimo(19, '2025-04-19T13:00:00', '2025-04-19T15:00:00', clientes[8].cpf, bikes[18].codigo);
        new Emprestimo(20, '2025-04-20T09:15:00', '2025-04-20T12:00:00', clientes[9].cpf, bikes[19].codigo);

        new Emprestimo(21, '2025-04-21T10:00:00', '2025-04-21T12:00:00', clientes[0].cpf, bikes[20].codigo);
        new Emprestimo(22, '2025-04-22T08:30:00', '2025-04-22T10:30:00', clientes[1].cpf, bikes[21].codigo);
        new Emprestimo(23, '2025-04-23T11:00:00', '2025-04-23T13:00:00', clientes[2].cpf, bikes[22].codigo);
        new Emprestimo(24, '2025-04-24T07:00:00', '2025-04-24T09:00:00', clientes[3].cpf, bikes[23].codigo);
        new Emprestimo(25, '2025-04-25T09:30:00', '2025-04-25T11:30:00', clientes[4].cpf, bikes[24].codigo);
        new Emprestimo(26, '2025-04-26T10:15:00', '2025-04-26T12:15:00', clientes[5].cpf, bikes[25].codigo);
        new Emprestimo(27, '2025-04-27T08:00:00', '2025-04-27T11:00:00', clientes[6].cpf, bikes[26].codigo);
        new Emprestimo(28, '2025-04-28T13:00:00', '2025-04-28T15:30:00', clientes[7].cpf, bikes[27].codigo);
        new Emprestimo(29, '2025-04-29T09:45:00', '2025-04-29T11:45:00', clientes[8].cpf, bikes[28].codigo);
        new Emprestimo(30, '2025-04-30T07:30:00', '2025-04-30T09:30:00', clientes[9].cpf, bikes[29].codigo);

        new Emprestimo(31, '2025-04-01T10:00:00', '2025-04-01T13:00:00', clientes[0].cpf, bikes[0].codigo);
        new Emprestimo(32, '2025-04-02T07:00:00', '2025-04-02T09:00:00', clientes[1].cpf, bikes[1].codigo);
        new Emprestimo(33, '2025-04-03T08:30:00', '2025-04-03T10:30:00', clientes[2].cpf, bikes[2].codigo);
        new Emprestimo(34, '2025-04-04T11:15:00', '2025-04-04T13:15:00', clientes[3].cpf, bikes[3].codigo);
        new Emprestimo(35, '2025-04-05T09:00:00', '2025-04-05T11:00:00', clientes[4].cpf, bikes[4].codigo);
        new Emprestimo(36, '2025-04-06T12:30:00', '2025-04-06T14:30:00', clientes[5].cpf, bikes[5].codigo);
        new Emprestimo(37, '2025-04-07T10:45:00', '2025-04-07T13:15:00', clientes[6].cpf, bikes[6].codigo);
        new Emprestimo(38, '2025-04-08T06:30:00', '2025-04-08T08:30:00', clientes[7].cpf, bikes[7].codigo);
        new Emprestimo(39, '2025-04-09T09:30:00', '2025-04-09T12:00:00', clientes[8].cpf, bikes[8].codigo);
        new Emprestimo(40, '2025-04-10T08:15:00', '2025-04-10T10:45:00', clientes[9].cpf, bikes[9].codigo);

        new Emprestimo(41, '2025-04-11T07:30:00', '2025-04-11T10:00:00', clientes[0].cpf, bikes[10].codigo);
        new Emprestimo(42, '2025-04-12T10:00:00', '2025-04-12T12:00:00', clientes[1].cpf, bikes[11].codigo);
        new Emprestimo(43, '2025-04-13T08:00:00', '2025-04-13T11:00:00', clientes[2].cpf, bikes[12].codigo);
        new Emprestimo(44, '2025-04-14T13:30:00', '2025-04-14T15:30:00', clientes[3].cpf, bikes[13].codigo);
        new Emprestimo(45, '2025-04-15T09:45:00', '2025-04-15T12:15:00', clientes[4].cpf, bikes[14].codigo);
        new Emprestimo(46, '2025-04-16T07:00:00', '2025-04-16T09:00:00', clientes[5].cpf, bikes[15].codigo);
        new Emprestimo(47, '2025-04-17T10:00:00', '2025-04-17T13:00:00', clientes[6].cpf, bikes[16].codigo);
        new Emprestimo(48, '2025-04-18T09:15:00', '2025-04-18T11:45:00', clientes[7].cpf, bikes[17].codigo);
        new Emprestimo(49, '2025-04-19T08:30:00', '2025-04-19T10:30:00', clientes[8].cpf, bikes[18].codigo);
        new Emprestimo(50, '2025-04-20T11:00:00', '2025-04-20T13:30:00', clientes[9].cpf, bikes[19].codigo);

    }

    
  }
  
  class statusEmprestimo{
      static SE1 =  "Em aberto"
      static SE2 =  "Finalizado"
      static SE3 =  "Atrasado"
  }


  module.exports = {Emprestimo};