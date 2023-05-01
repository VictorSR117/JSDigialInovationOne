//retorna o tamanho das letras
var textSize = "text".length;
console.log(`qtde de letras ${textSize}`);

//retorna um array quebrando a string por um delimitador
var splittedText = "text".split("x");
console.log(`array separado pelo delimitador ${splittedText}`);

//busca um valor e subistitui por outro
var replacedText = "text".replace("x", "y");
console.log(`subistituição de valor ${replacedText}`); 

//retorna a fatiia de um valor
var lastChar = "text".slice(-1);
console.log(`letra da string ${lastChar}`);

//string modificada no inicio e no fim
var allWithoutLastChar = "text".slice(0, -1);
console.log(`valor da string da primeira letra menos a ultima ${allWithoutLastChar}`);

//string contando a aprtir da segunda letra
var secondToEnd = "text".slice(1);
console.log(`valor da string da segunda letra até a ultima ${secondToEnd}`);

//retorna um numero x de caracteres a partir de uma posição
var twoCharsBeforeFirstPos = "text".substring(0, 2);
console.log(`as duas primeiras letras são ${twoCharsBeforeFirstPos}`);