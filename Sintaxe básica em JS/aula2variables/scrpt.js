var VouF = false;
console.log(VouF);
console.log(typeof(VouF));

var ramdomNumber = 1;
console.log(typeof(ramdomNumber));
console.log(ramdomNumber);

var ramdomText = "blá blá";
console.log(typeof(ramdomText));
console.log(ramdomText);

var variable;
console.log(variable);

let variable2;
console.log(variable2);

const constant = "";
console.log(constant);

var GlobalEscop = "global";
console.log(GlobalEscop);

(() => {
    let LocalScopIntern = "local";
    console.log(LocalScopIntern);
})();

// operations = (n1,n2) => {
//     sum = (n1, n2) => console.log(n1 + n2);
//     sub = (n1, n2) => console.log(n1 - n2);
//     mult = (n1, n2) => console.log(n1 * n2);
//     div = (n1, n2) => console.log(n1 / n2);
//     resDiv = (n1, n2) => console.log(n1 % n2);
//     pot = (n1, n2) => console.log(n1 ** n2);
// }

// operations(sum(2,8));

const operations = ({ n1, n2, operation }) => { 
    const operationsFunc = { 
        sum: (n1, n2) => n1 + n2,
        sub: (n1, n2) => n1 - n2,
        mult: (n1, n2) => n1 * n2,
        div: (n1, n2) => n1 / n2,
        resDiv: (n1, n2) => n1 % n2,
        pot: (n1, n2) => n1 ** n2
    };
    return console.log(operationsFunc[operation](n1, n2)); 
};
operations({ n1: 2, n2: 3, operation: "pot" });