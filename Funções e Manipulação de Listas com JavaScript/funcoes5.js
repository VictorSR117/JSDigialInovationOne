const pessoa = {
    nome: "renan",
    idade: 30
}

function gritar(prefix) {
    console.log(prefix, this.nome);
}

//jeitos de executar uma função
gritar.apply(pessoa, ['olaaaaa']) //passa o contexto da função para o obj utilizando um array de elementos
gritar.call(pessoa, 'olaaaaa') //chama o objeto e passa um conjunto de elementos para seu contexto