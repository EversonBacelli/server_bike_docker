let {Bike, gerar30Bikes, statusBike} = require('../src/model/Bike.js')

let listaBikes = []

beforeAll( ()=>{
    Bike.gerarBikes()
    listaBikes = Bike.BIKES
})

test("Verificar lista de bikes", ()=>{
    expect(listaBikes.length).toBe(30)
    expect(listaBikes[0]).toHaveProperty("codigo")
    expect(listaBikes[0]).toHaveProperty("cor")
    expect(listaBikes[0]).toHaveProperty("status")
    expect(listaBikes[0]).toHaveProperty("aro")
    expect(listaBikes[0]).toHaveProperty("dataAquisicao")
    expect(listaBikes[0]).toHaveProperty("tamanho")
    expect(listaBikes[0]).toHaveProperty("modelo")

    expect(listaBikes[0]).toHaveProperty("codigo", "B001")
    expect(listaBikes[0]).toHaveProperty("status", statusBike.S1)
})


test('Verificar Status Bike', ()=>{
    let S1 = statusBike.S1
    let S2 = statusBike.S2
    let S3 = statusBike.S3

    expect(S1).toBe('DISPONÍVEL')
    expect(S2).toBe('EMPRESTADA')
    expect(S3).toBe('EM MANUTENÇÃO')
})

test('Função estática getBike', ()=>{
    // buscar uma bique pelo código
    let bike = Bike.getBike('B001')
    expect(bike).not.toBeNull()
    expect(bike[0].codigo).toBe('B001')

})

test('Função estática validarBike', ()=>{
     //Validar Bike
     let bike = Bike.getBike('B001')

     expect(bike[0].status).toBe(statusBike.S1)
     expect(bike[0].validarBike()).toBe(true)
 
     bike[0].status = statusBike.S2
     expect(bike[0].validarBike()).toBe(false)
     
     bike[0].devolver()
     expect(bike[0].validarBike()).toBe(true)
 
})

test('Função estática devolverBike', ()=>{
    let bike = Bike.getBike('B001')

     bike[0].status = statusBike.S2
     expect(bike[0].validarBike()).toBe(false)
     
     bike[0].devolver()
     expect(bike[0].validarBike()).toBe(true)
})

test('Função estática emManutencao', ()=>{
    let bike = Bike.getBike('B001')
    bike[0].emManutencao()
    expect(bike[0].status).toBe(statusBike.S3)
})

test('Funcao estatica emprestarBike', ()=>{
    let bike = Bike.getBike('B002')
    let resp = bike[0].emprestar()

    expect(bike[0].status).toBe(statusBike.S2)
    expect(resp).toHaveProperty('resp', 'Atualizado disponibilidade da bike B002')

    let resp2 = bike[0].emprestar()
    expect(bike[0].status).toBe(statusBike.S2)
    expect(resp2).toHaveProperty('resp', 'Bike indisponível')
})