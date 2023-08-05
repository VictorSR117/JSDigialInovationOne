/*const pessoa = {
    genero: "masculino"
}

const renan = {
    nome: "renan",
    idade: 30,
    __proto__: pessoa
}
console.log(renan.genero);
*/



//isso é o mesmo que 
function Pessoa (nome, idade) {
    this.nome = nome
    this.idade = idade
}

Pessoa.prototype.falar = function () {
    console.log(`meu nome é ${this.nome}`);
}

const renan = new Pessoa("renan", 30)
console.log(renan);
renan.falar()



//isso
class Pessoa {

    constructor(nome, idade) {
        nome,
        idade
    }

    falar () {
        console.log(`meu nome é ${this.nome}`);
    }
}