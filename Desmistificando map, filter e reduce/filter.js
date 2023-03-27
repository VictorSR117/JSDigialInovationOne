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
        name: "relampago",
        type: "fish",
        age: 1
    }
]

const newPets = pets.filter((pet) => {
    return pet.age < 5;
});

console.log(pets);
console.log("\n");
console.log(newPets);