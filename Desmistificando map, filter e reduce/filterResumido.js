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

const eMenorQueCinco = (num) => {
    return num < 5;
}

const newPets = pets.filter(({ age }) => eMenorQueCinco(age));

console.log(pets);
console.log("\n");
console.log(newPets);