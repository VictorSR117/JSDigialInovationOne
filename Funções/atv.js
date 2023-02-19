function calculaIdade(anos) {
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade.`;
}

const pessoa1 = {
    nome: "Jeffinho",
    idade: "todos"
}

const pessoa2 = {
    nome: "Rogério",
    idade: 48
}

const animal = {
    nome: "Bob",
    idade: 6,
    raca: "Chitso falso"
}

console.log(calculaIdade.call(pessoa1, [3]));