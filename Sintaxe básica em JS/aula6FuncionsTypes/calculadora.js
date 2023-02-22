(calc = () => {
    const operation = Number(prompt("Escolha uma operação:\n 1 - Soma (+)\n 2 - subtração (-)\n 3 - multiplicação (*)\n 4 - divisão real (/)\n 5 - Divisão inteira (%)\n 6 - potenciação (**)"));
    
    if (!operation || operation >= 7) {
        alert("Erro - operação inválida");
        calc();
    }
    else {
        let n1 = Number(prompt("insira o primeiro valor: "));
        let n2 = Number(prompt("insira o segundo valor: "));

        if (!n1 || !n2) {
            alert("Erro - parametros inválidos");
            calc();
        }
        else {
            novaOperacao = () => {
                let option = Number(prompt("Deseja fazer outra operação?\n 1 - sim\n 2 - não"));
        
                switch (option) {
                    case 1:
                        calc();
                        break;
                    case 2:
                        alert("Byeee");
                        break;
                    default:
                        alert("digite uma opção válida");
                        novaOperacao();
                        break;
                }
            }
            sum = () => {
                alert(`${n1} + ${n2} = ${n1 + n2}`);
                novaOperacao();
            }
            sub = () => {
                alert(`${n1} - ${n2} = ${n1 - n2}`);
                novaOperacao();
            }
            mult = () => {
                alert(`${n1} * ${n2} = ${n1 * n2}`);
                novaOperacao();
            }
            divFloat = () => {
                alert(`${n1} / ${n2} = ${n1 / n2}`);
                novaOperacao();
            }
            divInt = () => {
                alert(`O resto da divisão entre ${n1} e ${n2} é ${n1 % n2}`);
                novaOperacao();
            }
            pot = () => {
                alert(`${n1} elevado a ${n2}º é igual a ${n1 ** n2}`);
                novaOperacao();   
            }
        }
            
        switch (operation) {
            case 1:
                sum();
                break;
            case 2:
                sub();
                break;
            case 3:
                mult();
                break;
            case 4:
                divFloat();
                break;
            case 5:
                divInt();
                break;
            case 6:
                pot();
                break;
            default:
                alert("erro, operação inválida");
                break;
        }
    }
})();