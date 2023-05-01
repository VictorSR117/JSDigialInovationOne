const user = {
    name: "victor",
    lastName: "Luiz"
}

//recupera as chaves do objeto
console.log(`propriedades do objeto user ${Object.keys(user)}`);

//recupera os valores das chaves do objeto
console.log(`valores das propriedades do objeto user ${Object.values(user)}`);

//retorna um array de arrays contendo [ nome_prop, valor_prop ]
console.log(`lista de propriedades e valores ${Object.entries(user)}`);

//mergear propriedades de objetos(juntar)
Object.assign(user, {fullName: "victor luiz lopes da Silva"});

console.log(`adiciona a propriedade fullName no objeto user ${user}`);
console.log(`retorna um novo objeto mergeando (juntando) um ou mais objetos ${Object.assign({}, user, {age: 26})}`);

//previne todas as alterações em um objeto
const newObj = { foo: "bar" }
Object.freeze(newObj);

newObj.foo = "changes";
delete newObj.foo;
newObj.bar = "foo";

console.log(`variável newObj após as alterações ${newObj}`);

//permite apenas a alteração de propriedades existentes em um objeto
const person = { name: "victor" };
Object.seal(person);

person.name = "Victor Luiz";
delete person.name;
person.age = "20";

console.log(`variável person após alterações ${person}`);