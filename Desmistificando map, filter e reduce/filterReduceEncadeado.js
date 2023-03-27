pets = [
    {
        name: "brutus",
        type: "dog",
        age: 10,
        weight: 20
    },
    {
        name: "renan",
        type: "cat",
        age: 2,
        weight: 5
    },
    {
        name: "kratos",
        type: "dog",
        age: 9,
        weight: 18
    },
    {
        name: "aline",
        type: "cat",
        age: 1,
        weight: 4
    },
    {
        name: "jorge",
        type: "dog",
        age: 7,
        weight: 24
    },
    {
        name: "fred",
        type: "cat",
        age: 2,
        weight: 3
    },
    {
        name: "relampago",
        type: "fish",
        age: 1,
        weight: 0.250
    },
    {
        name: "alazão",
        type: "horse",
        age: 1,
        weight: 110
    }
]

// let dogs = pets.filter((pet) => {
//     return pet.type === "dog";
// });

// let totalWeightDogs = dogs.reduce((total, pet) => {
//     return total + pet.weight;
// }, 0);

// console.log(totalWeightDogs);

let totalWeightDogs = pets
    .filter((pet) => {
        return pet.type === "dog";
    })
    .reduce((total, pet) => {
        return total + pet.weight;
}, 0);

console.log(totalWeightDogs);