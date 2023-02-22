let arr = ["string", 1, true];
console.log(arr);

let array = ["string", 1, true, ["arr1"], ["arr2"], ["arr3"], ["arr4"]];
console.log(array[0]);

array.forEach((item, index)=>console.log(item, index));//percorre o array como um laço for 

array.push("new item");//adiciona um novo item no final do array
console.log(array);

array.pop();//remove um novo item no final do array
console.log(array);

array.shift();//remove um novo item no inicio do array
console.log(array);

array.unshift("new item");//adiciona um novo item no inicio do array
console.log(array);

console.log(array.indexOf(true));//aca a posição de um elemento no array

array.splice(0, 3);//a partir de um determinado indice, deleta um certo número de valores
console.log(array);

let novoArray = array.slice(0, 3);//a partir de um certo indice, copia um certo número de valores
console.log(novoArray);

let object = {string: "string", number: 1, boolean: true, array2: ["array"], objintern: {internObj: "internObj"}};

console.log(object.objintern);

//DESESTRUTURAÇÃO DE OBJ

//jeito 1 (convencional)
var string = object.string;
var array3 = object.array2;

//jeito 2 (pouco usado)
var {string, boolean, objintern} = object;
console.log(string, boolean,objintern);