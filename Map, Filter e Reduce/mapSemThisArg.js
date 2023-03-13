mapSemThis = arr => {
    return arr.map(item => {
        return item * 2;
    });
}

var nums = [2, 4, 6, 8, 10];

console.log(mapSemThis(nums));
console.log(nums);