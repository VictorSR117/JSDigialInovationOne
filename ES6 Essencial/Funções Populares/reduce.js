const arr = [1, 2, 3, 4, 5];

//gera um novo valor com base em um monte de verificações de items do array
arr.reduce((total, value) => total *= value, 0);//o 0 representa o tipo e o valor inicial da variável que será retornada
//15