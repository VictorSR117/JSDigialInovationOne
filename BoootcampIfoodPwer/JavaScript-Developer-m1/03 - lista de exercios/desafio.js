/* 
    1) Faça um algorítimo que dado as 3 notas tiradas por um aluno em um semestre da faculdade calcule e imprima a sua média e a sua classificação conforme a tabela abaixo.

    Média = (nota 1 + nota 2 + nota 3) / 3;

    Classificação:
    - Média menor que 5, reprovação;
    - Média entre 5 e 7, recuperação;
    - Média acima de 7, passou de semestre;
*/

note1 = 10
note2 = 10
note3 = 9

avarage = parseInt(note1 + note2 + note3 / 3)

if (avarage < 5) {
    console.log("reprovado")
}
else if (avarage >= 5 && avarage < 7) {
    console.log("recuperação")
}
else if (avarage > 7) {
    console.log("aprovado")
}
else {
    console.log("erro")
}

/*
    2) O IMC – Indice de Massa Corporal é um critério da Organização Mundial de Saúde para dar uma indicação sobre a condição de peso de uma pessoa adulta. 

    Formula do IMC:
    IMC = peso / (altura * altura)

    Elabore um algoritmo que dado o peso e a altura de um adulto mostre sua condição de acordo com a tabela abaixo.

    IMC em adultos Condição:
    - Abaixo de 18.5 Abaixo do peso;
    - Entre 18.5 e 25 Peso normal;
    - Entre 25 e 30 Acima do peso;
    - Entre 30 e 40 Obeso;
    - Acima de 40 Obsesidade Grave;
*/
var weight = 60;
var height = 1.90;

const IMC = weight / (height * height);

if (IMC < 18.5) {
    console.log("Abaixo do peso");
}
else if (IMC >= 18.5 && IMC < 25) {
    console.log("Peso normal");
}
else if (IMC >= 25 && IMC < 30) {
    console.log("Acima do peso");
}
else if (IMC >= 30 && IMC <= 40) {
    console.log("Acima do peso");
}
else if (IMC > 40) {
    console.log("Acima do peso");
}
else {
    console.log("erro, valor inválido");
}

/*
    3) Elabore um algoritmo que calcule o que deve ser pago por um produto, considerando o preço normal de etiqueta e a escolha da condição de pagamento. 
    Utilize os códigos da tabela a seguir para ler qual a condição de pagamento escolhida e efetuar o cálculo adequado.

    Código Condição de pagamento:
    - À vista Débito, recebe 10% de desconto;
    - À vista no Dinheiro ou PIX, recebe 15% de desconto;
    - Em duas vezes, preço normal de etiqueta sem juros;
    - Acima de duas vezes, preço normal de etiqueta mais juros de 10%;
*/
var price = 1000;
var qtdPortion = 4;

var conditionPayment = {
    Débito: 1,
    DinheiroPIX: 2,
    portionX2: 3,
    portionMore2: 4
};

var paymentMethod = conditionPayment.portionX2;

switch (paymentMethod) {
    case 1:
        console.log(`valor total: ${(price * 0.90).toFixed(2)}`);
        break;
    case 2:
        console.log(`valor total: ${(price * 0.85).toFixed(2)}`);
        break;
    case 3:
        console.log(`valor total: ${(price).toFixed(2)}, sendo ${(price/2).toFixed(2)} cada parcela mensal`);
        break;
    case 4:
        console.log(`valor total: ${(price * 1.10).toFixed(2)}, sendo ${(price/qtdPortion).toFixed(2)} cada parcela mensal`);
        break;
    default:
        console.log("erro, opção inválida");
        break;
}