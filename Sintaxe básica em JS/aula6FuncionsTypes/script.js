function funcao() {
    console.log("sou texto de uma função boba");
}
funcao();

var funccao = function funccao() {
    console.log("sou texto de uma função atribuida a uma variável");
}

var funccao = function() {
    console.log("sou texto de uma função atribuida a uma variável");
}
funccao();

var arrowFunction = () => {
    console.log("sou texto de uma arrow function");
}

arrowFunction();