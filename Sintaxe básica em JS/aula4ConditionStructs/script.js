var jogador1 = 0;
var jogador2 = 0;
var placar;

jogador1 != -1 && jogador2 != -1 ? console.log("players avaiable") : console.log("invalid players");

if (jogador1 > 0 && jogador2 == 0) {
    console.log("player 1 scored a points");
    placar = jogador1 > jogador2;
}
else if (jogador2 > 0 && jogador1 == 0) {
    console.log("player 2 scored a points");
    placar = jogador2 > jogador1;
}
else {
    console.log("no one scored");
}

switch (placar) {
    case jogador1 > jogador2:
        console.log("player 1 win");
        break;

    case jogador2 > jogador1:
        console.log("player 2 win");
        break;

    default:
        console.log("no one win");
        break;
}

let array = ["valor1", "valor2", "valor3", "valor4", "valor5"];

let object = {
    propriet1: "valor1",
    propriet2: "valor2",
    propriet3: "valor3",
};

for (let index = 0; index < array.length; index++) {
    console.log(index);
}

for (let i in array) {
    console.log(i);
}

for (i in object) {//como é objeto ele ja entende q é uma váriavel de estado
    console.log(i);
}

for (let iterator of array) {
    console.log(iterator);
}

for (iterator of object.propriet1) {//não serve para objeto!!
    console.log(iterator);
}

var inte = 0;

while (inte < 10) {
    console.log(inte);
    inte++;
}

inte = 0;

do {
    console.log(inte);
    inte++
} while (inte < 10);

