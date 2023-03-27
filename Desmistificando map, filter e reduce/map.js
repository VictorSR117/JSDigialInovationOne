pets = [
    {
        name: "brutus",
        type: "dog",
        age: 10
    },
    {
        name: "renan",
        type: "cat",
        age: 2
    },
    {
        name: "kratos",
        type: "dog",
        age: 9
    },
    {
        name: "aline",
        type: "cat",
        age: 1
    },
    {
        name: "jorge",
        type: "dog",
        age: 7
    },
    {
        name: "fred",
        type: "cat",
        age: 2
    },
    {
        name: "relampago",
        type: "fish",
        age: 1
    },
    {
        name: "alazão",
        type: "horse",
        age: 1
    }
]

//let petNames = pets.map(pet => pet.name); versão minificada

let petNames = pets.map((pet) => {
    pet.name;
});

let namesOfPets = pets.forEach((pet) => {
    pet.name;
});

let forEachPets = []

pets.forEach((pet) => {
    forEachPets.push(pet.name);
});

console.log(forEachPets);