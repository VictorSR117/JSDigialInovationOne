class Carro {
    marca;
    cor;
    gastoMediPorKm;

    constructor(_marca, _cor, _gastoMediPorKm) {
        this.marca = _marca;
        this.cor = _cor;
        this.gastoMediPorKm = _gastoMediPorKm;
    }

    calcularGastoDePercurso(distanciaEmKm, precoCombustivel) {
        return distanciaEmKm * this.gastoMediPorKm * precoCombustivel;
    }
}

const uno = new Carro('Fiat', 'Branco', 1/12);
console.log(uno.calcularGastoDePercurso(70, 5));

const palio = new Carro('Fiat', 'preto', 1/10);
console.log(palio.calcularGastoDePercurso(70, 5));