function soma(num1) {
    return function (num2) {
        return num1 + num2;
    }
}

const somaParcial = soma(10)

console.log(somaParcial(15));
console.log(soma(10)(20));
