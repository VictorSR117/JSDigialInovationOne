verificationsRef = (condition, msg) => {
    if (condition, msg) {
        throw new ReferenceError(msg);
    }
}
verificationsTyp = (condition, msg) => {
    if (condition, msg) {
        throw new TypeError(msg);
    }
}
verificationsRan = (condition, msg) => {
    if (condition, msg) {
        throw new RangeError(msg);
    }
}

((arr, num) => {
    try {
        verificationRef(!arr && !num, "Envie os parametros");
        verificationsTyp(typeof arr !== "object", "O array precisa ser do tipo object");
        verificationsTyp(typeof arr !== "number", "o número precisa ser do tipo number (sem letras)");
        verificationRan(!arr && !num, "Tamanho inválido");
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
})([1,2], 2);