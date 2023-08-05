const pessoa = {
    genero: "masculino"
}

/*
const renan = {
    nome: "renan",
    __proto__: pessoa
}
*/

const renan = Object.create(pessoa)

renan.nome = "renan"