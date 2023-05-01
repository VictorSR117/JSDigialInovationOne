const symbol1 = Symbol();
const symbol2 = Symbol();

//symbols são unicos
console.log(`symbol1 é igual a symbol2 ?${symbol1 === symbol2}`);

//previnir conflito entre nomes de propriedades
const nameSymbol1 = Symbol("name");
const nameSymbol2 = Symbol("name");

const user = {
    [nameSymbol1]: "Victor",
    [nameSymbol2]: "Aline",
    lastName: "luiz Lopes"
}

console.log(user);

//Symbols criam propriedades que não são enumberables
for (const key in user) {
    if (user.hasOwnProperty(key)) {
        console.log(`valor da chave ${key}: ${user[key]}`);
    }
}

console.log(`propriedades do objeto user: ${Object.values(user)}`);
console.log(`valores das propriedades do objeto user ${Object.values(user)}`);

//exibir symbols de um objeto
console.log(`symbols registrados no objeto user: ${Object.getOwnPropertySymbols(user)}`);

//acessando todas as propriedades do objeto
console.log(`todas as propriedades do objeto user: ${Reflect.ownKeys(user)}`);

//criar um enum
const directions = {
    UP   :  Symbol(  "UP"  ),
    DOWN :  Symbol(  "DOWN"  ),
    LEFT :  Symbol(  "LEFT"  ),
    RIGHT:  Symbol(  "RIGHT"  ),
}