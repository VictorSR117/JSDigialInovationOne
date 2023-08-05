const add = (n1, n2) => n1 + n2;
const sub = (n1, n2) => n1 - n2;
const mut = (n1, n2) => n1 * n2;
const div = (n1, n2) => n1 / n2;

function calculadora(n1, operation, n2) {
    console.log(operation(n1, n2));
}

calculadora(10, add, 20);

document.getElementById("btn1").addEventListener("click", () => console.log("deu click"));