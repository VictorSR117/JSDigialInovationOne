class Carros {
    marca;
    cor;
    gastoMedioDeCombustivelPorKmRodado;

    constructor(_marca, _cor, _gastoMedioDeCombustivelPorKmRodado) {
        this.marca = _marca;
        this.cor = _cor;
        this.gastoMedioDeCombustivelPorKmRodado = 1;
    }

    descrever(qtdeKm, precoCombustivel) {
        console.log(`o valor gasto para realizar este percurso é de ${(qtdeKm*this.gastoMedioDeCombustivelPorKmRodado) * precoCombustivel}`);  
    }
}

const opala = new Carros('Chevrolet', "preto", 2);

opala.descrever