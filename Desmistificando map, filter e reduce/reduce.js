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

let totalAge = pets.reduce((total, pet) => {
    return total + pet.age;
}, 0);

console.log(totalAge);