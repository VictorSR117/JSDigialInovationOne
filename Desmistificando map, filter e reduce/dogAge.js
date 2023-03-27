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

let totalWeight = pets.reduce((total, pet) => {
    if (pet.type !== "dog") return total
    return total + pet.weight;
}, 0);

console.log(totalWeight);