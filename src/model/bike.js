class Bike {
    static BIKES = []
    constructor(codigo, cor, aro, dataAquisicao, 
        tamanho, modelo, img_url) { // Adicionado img_url
        this.codigo = codigo
        this.cor = cor
        this.status = statusBike.S1
        this.aro = aro
        this.dataAquisicao = dataAquisicao
        this.tamanho = tamanho
        this.modelo = modelo
        this.img_url = img_url // Novo atributo
        Bike.BIKES.push(this)
    }

    emprestar() {
        if (this.status != statusBike.S1) {
            return { resp: 'Bike indisponível' }
        } else {
            this.status = statusBike.S2
            return { resp: 'Atualizado disponibilidade da bike ' + this.codigo }
        }
    }

    static gerarBikes() {
        gerar30Bikes()
    }

    static getBike(codigo) {
        let bike = (Bike.BIKES).filter(bike => bike.codigo == codigo)
        return bike
    }

    validarBike() {
        let validar = this.status == statusBike.S1 ? true : false
        return validar
    }

    devolver() {
        this.status = statusBike.S1
    }

    emManutencao() {
        this.status = statusBike.S3
    }
}

class statusBike {
    static S1 = 'DISPONÍVEL'
    static S2 = 'EMPRESTADA'
    static S3 = 'EM MANUTENÇÃO'
}

function gerar30Bikes() {
    const cores = ['Vermelha', 'Azul', 'Preta', 'Verde', 'Amarela', 'Branca', 'Cinza'];
    const modelos = ['Caloi Explorer', 'Monark Comfort', 'Sense Urban', 'Oggi Big Wheel', 'Soul SL329'];
    const tamanhos = ['P', 'M', 'G'];
    const aros = [26, 27, 29];
    const img_urls = [
        'https://via.placeholder.com/150/FF0000',
        'https://via.placeholder.com/150/0000FF',
        'https://via.placeholder.com/150/000000',
        'https://via.placeholder.com/150/008000',
        'https://via.placeholder.com/150/FFFF00',
        'https://via.placeholder.com/150/FFFFFF',
        'https://via.placeholder.com/150/808080'
    ];

    for (let i = 1; i <= 30; i++) {
        const codigo = `B${i.toString().padStart(3, '0')}`;
        const cor = cores[Math.floor(Math.random() * cores.length)];
        const modelo = modelos[Math.floor(Math.random() * modelos.length)];
        const tamanho = tamanhos[Math.floor(Math.random() * tamanhos.length)];
        const aro = aros[Math.floor(Math.random() * aros.length)];
        const img_url = img_urls[Math.floor(Math.random() * img_urls.length)];

        // Data aleatória entre 2022 e 2024
        const ano = Math.floor(Math.random() * 3) + 2022;
        const mes = Math.floor(Math.random() * 12);
        const dia = Math.floor(Math.random() * 28) + 1;
        const dataAquisicao = new Date(ano, mes, dia);

        new Bike(codigo, cor, aro, dataAquisicao, tamanho, modelo, img_url);
    }

    return Bike.BIKES;
}

module.exports = { Bike, statusBike, gerar30Bikes }