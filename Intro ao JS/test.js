sum = (n1 = 1, n2 = 1) => {
    console.log(n1 + n2);
}

sum(2,3);

returnEvenValues = (array) => {
    let evenNums = [];
    for (let index = 0; index < array.length; index++) {
        if (array[index] % 2 === 0) {
            evenNums.push(array[index]);
        }
        else {
            console.log(`${array[index]} não é par`);
        }
    }
    console.log("os números pares são:", evenNums);
}

let array = [1, 2, 3, 4, 5, 6, 7, 8];

returnEvenValues(array);