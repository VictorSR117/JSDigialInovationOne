filterpars = arr => {
    return arr.filter(item => {
        return item % 2 === 0;
    });
}

let myArr = [1, 23, 55, 67, 30, 2, 4];

console.log(filterpars(myArr));