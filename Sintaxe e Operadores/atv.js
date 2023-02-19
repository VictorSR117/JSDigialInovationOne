(
    (n1 = 1, n2 = 1) => {
        let equal;
        let sum = n1 + n2;
        let value10;
        let value20;
        n1 === n2 ? equal = "são iguais" : equal = "não são iguais";
        sum > 10 || sum < 20 ? console.log("a soma dos números é maior que 10 ou menor que 20") : console.log("a soma dos números não é maios que 10 ou menor que 20");
        sum > 10 ? value10 = "maior" : value10 = "menor";
        sum < 20 ? value20 = "menor" : value20 = "maior";
        return console.log(`Os números ${n1} e ${n2} ${equal}, sua soma é ${sum} que é ${value10} que 10 e ${value20} que 20`);
    }
)(5, 2);