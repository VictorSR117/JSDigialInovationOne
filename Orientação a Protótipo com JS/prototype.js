String.prototype.toPLang = function () {
    return `P ${this}`
}

String.prototype.novoMetodo = function () {
    return `eu mesmo como programador criei esse método`
}

console.log("".novoMetodo());

console.log('teste'.toPLang());