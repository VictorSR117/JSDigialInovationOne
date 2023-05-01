/*switch (expressão) {
    case valor1:
        comandos
        break;

    case valorN:
        comandos
        break;

    default:
        break;
}
*/

const fruit = "banana";

switch (fruit) {
    case 'banana':
        console.log('R$ 3,00 / Kg');
        break;

    case 'mamão':
        console.log('R$ 2,00 / Kg');
        break;

    case 'pera':
        console.log('R$ 5,00 / Kg');
        break;

    default:
        console.log("produto não existe no estoque");
        break;
}