const persons = [
    {
        name: 'Victor',
        age: 20,
        gender: gender.MAN
    },
    {
        name: 'Pedro',
        age: 43,
        gender: gender.MAN
    },
    {
        name: 'Jennifer',
        age: 18,
        gender: gender.WOMAN
    },
];

//retornar a quantidade de itens de um array
console.log(`itens: ${persons.length}`);

//verificar se é um array
console.log(`a variável persons é um array, ${Array.isArray(persons)}`);

//iterar os itens do array
persons.forEach((person, index, arr) => {
    console.log(`Nome: ${person.name} index: ${index} ${arr}`);
});

//filtar array
const mens = persons.filter(person => person.gender === gender.MAN);
console.log(`\n Nova lista apenas com homens: ${mens}`);

//retornar um novo
const personWithCourse = persons.map(person => {
    person.course = "Introdução ao JavaScript";
    return person;
});

console.log(`Pessoas com a adição de course ${personWithCourse}`);

//transformar um array em outro tipo
const totalAge = persons.reduce((age, person) => {
    age += person.age;
    return age;
}, 0);

console.log(`Soma da idade das pessoas ${totalAge}`);

//juntando operações
const totalEvenAges = persons
                        .filter(person => person.age % 2 === 0)
                        .reduce((age, person) => {
                            age += person.age;
                            return age;
                        }, 0);

console.log(`Soma de idade das pessoas que possuem idade par ${totalEvenAges}`);