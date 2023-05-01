const myNumber = 12.4032;

//transformar número para string
const numberAsString = myNumber.toString();
console.log(`número transformado em string ${numberAsString} ${typeof numberAsString}`);

//retorna o número com um número de casas decimais
const fixedTwoDecimals = myNumber.toFixed(2);
console.log(`número com 2 casas decimais ${fixedTwoDecimals}`);

//transforma uma string em float
console.log(`string passada para float ${parseFloat("13.50")}`);
const strToFloat = parseFloat(myNumber);
console.log(`string passada para float ${strToFloat}`);

//transforma uma string em float
console.log(`string passada para float ${parseInt("13.50")}`);
const strToInt = parseInt(myNumber);
console.log(`string passada para float ${strToInt}`);

//transforma o número em int ou float (o própio JS decide qual o melhor tipo de acordo com a situação)
console.log(`númeo convertido a escolha do própio JavaScript ${Number(myNumber)}`);