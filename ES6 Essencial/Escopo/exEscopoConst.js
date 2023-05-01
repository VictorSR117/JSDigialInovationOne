const name = "victor";

//não da pra alterar
//name = "luiz";

const user = {
    name: "victor"
}

//mais se for objeto da pra mudar as propriedades
user.name = "luiz";

//não podemos fazer o onjeto "apontar pa outro lugar" (redeclarar ele)
// user = {
//     name: "victor"
// }

const persons = ["Gabriel", "Aline", "Carlos"];
console.log(persons);

//podemos adicionar novos items
persons.push("Victor");
console.log(persons);

//podemos remover items
persons.shift();
console.log(persons);

//podemos alterar diretamente
persons[0] = "Castelari";

console.log("\n array após alterações: ", persons);