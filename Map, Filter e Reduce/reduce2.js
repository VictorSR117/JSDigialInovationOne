const list = [
    {
        name: "sabao em po",
        preco: 30
    },
    {
        name: "cereal",
        preco: 12
    },
    {
        name: "toalha",
        preco: 30
    },
];

var balanceAvailable = 100;

calcBal = (balanceAvailable, list) => {
    return list.reduce((prev, current, index) => {
        console.log(`rodada ${index + 1}`);
        console.log({ prev });
        console.log({ current });

        return prev - current.preco;
    }, balanceAvailable)
}

console.log(calcBal(balanceAvailable, list));