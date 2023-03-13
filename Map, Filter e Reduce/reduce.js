sumNums = arr => {
    return arr.reduce((prev, current) => {
        console.log({ prev });
        console.log({ current });
        return prev + current;
    }, 0);
}

let arr = [1, 2];

console.log(sumNums(arr));