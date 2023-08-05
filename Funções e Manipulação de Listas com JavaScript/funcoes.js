function falarNome() {
    console.log("o nome é luan");
}

//const referenciaNova = falarNome

//referenciaNova()

function falarNomeCompleto(falarNome) {
    falarNome()
    console.log('santana morais');
    return falarNome
}

falarNomeCompleto(falarNome)()