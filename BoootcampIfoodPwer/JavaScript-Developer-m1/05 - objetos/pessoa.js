class Pessoa {
    nome;
    peso;
    altura;

    constructor(_nome, _peso, _altura) {
        this.nome = _nome;
        this.peso = _peso;
        this.altura = _altura;
    }

    calcularImc() {
        return this.peso / (this.altura * this.altura);
    }
    classificarImc() {
        const imc = this.calcularImc();

        if (imc < 18.5) {
            return ('Abaixo do peso');
        } 
        else if (imc >= 18.5 && imc < 25) {
            return ('Peso normal');
        } 
        else if (imc >= 25 && imc < 30) {
            return ('Acima do peso');
        } 
        else if (imc >= 30 && imc < 40) {
            return ('Obeso');
        } 
        else {
            return ('Obsedidade Grave');
        }
    }
}

const josé = new Pessoa('José', 70, 1.75);
console.log(josé.calcularImc());

const victor = new Pessoa('victor', 60, 1.90);
console.log(victor.calcularImc());

console.log(josé.classificarImc());
console.log(victor.classificarImc());