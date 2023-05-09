//exec1
var num = 5;
for (let index = 1; index < 10+1; index++) {
    console.log(`${num} x ${index} = ${num*index}`);
}
console.log("\n");




//exec2
const numbers = [2, 7, 3, 8, 10, 4];

var bigger = numbers.reduce((a, b) => {
    return Math.max(a, b);
}, -Infinity);

var smaller = numbers.reduce((a, b) => {
    return Math.min(a, b);
}, +Infinity);

console.log(`o maior número é ${bigger}`);
console.log(`o menor número é ${smaller}`);
console.log("\n");






//exec3
const pares = []
numbers.filter(element => element % 2 === 0 ? pares.push(element) : false);

console.log("os números pares são: ",pares);