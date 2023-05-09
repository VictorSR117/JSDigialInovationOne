// exec 1
// var num = 5;

// for (let index = 1; index < 10+1; index++) {
//     console.log(`${num} x ${index} = ${num*index}`);
// }




// const numbers = [1, 2, 3, 5, 8, 4, 9];
// const pares = [];

// exec2

// 1ºjeito de fazer
// numbers.filter(element => {
//     if (element % 2 === 0) {
//         pares.push(element);
//     }
//     return pares;
// });




// 2º jeito de fazer
// numbers.filter(element => {
//     // if (element % 2 === 0) pares.push(element);
//     // return pares;
//     return element % 2 === 0 ? pares.push(element) : false;
// });

// console.log(pares);




// exec3
// const names = ["victor", "luiz", "robson"];

// names.forEach(element => (element[0] === "v") ? console.log(`o nome '${element}' começa com a letra v`) : false);




// exec4

// for (let i = 10; i <= 50; i++) (i % 2 === 0) ? console.log(i) : false;



// exec5
// const notes = [2, 7, 3, 8, 10, 4];

// notes.forEach(e => e < 5 ? console.log(e) : false);



// exec6
// const notes = [2, 7, 3, 8, 10, 4];

// var max = notes.reduce((a, b) => {
//     return Math.max(a, b);
// }, -Infinity);

// console.log(max);