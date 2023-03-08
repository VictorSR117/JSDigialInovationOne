arrayValidation = (arr, num) => {
    try {
        if (!arr && !num) throw new ReferenceError("Envie os parametros");
        if (typeof arr !== "object") throw new TypeError("O array precisa ser do tipo object");
        if (typeof num !== "number") throw new TypeError("o número precisa ser do tipo number (sem letras)");
        if (arr.length !== num) throw new RangeError("Tamanho inválido");
        return arr;
    }
    catch (e) {
        if (e instanceof ReferenceError) {
            console.log("este é um ReferenceError");
            console.log(e.message);
        }
        else if (e instanceof TypeError) {
            console.log("este é um TypeError");
            console.log(e.message);
        }
        else if (e instanceof RangeError) {
            console.log("este é um RangeError");
            console.log(e.message);
        }
        else {
            console.log(`Tipo de erro não esperado: ${e}`);
        }
    }
}

console.log(arrayValidation([1, 2, 3, 4, 5], 5));