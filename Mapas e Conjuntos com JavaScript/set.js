const myArr = [30, 30, 40, 5, 223, 2049, 2034, 5];

uniqueValues = arr => {
    const mySet = new Set(arr);

    return [...mySet];
}

console.log(uniqueValues(myArr));