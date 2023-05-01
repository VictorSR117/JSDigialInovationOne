let user = {
    name: "Victor"
}

//Alterando a propriedade de um objeto
user.name = "algum outro nome";
user["name"] = "outro nome aleatório";
console.log(user);

const prop = "name";
user[prop] = "mais um nome aleatório";
getProp = () => user[prop]
console.log(user);

//criando uma propriedade
user.lastName = "Luiz Lopes da Silva";
console.log(user);

//deletando uma propriedade
delete user.name;