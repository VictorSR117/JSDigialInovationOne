var test = "example"; 

(() => {
    console.log(`valor de test dentro da função ${test}`);
    
    if (true) {
        var test = "example"; 
        console.log(`valor de test dentro do if ${test}`);
    }

    console.log(`valor de test após o if ${test}`);
})();

console.log("\n");

// é como se isso tivesse acontecendo:

var test = "example";

(() => {
    var test;
    console.log(`valor de test dentro da função ${test}`);
    
    if (true) {
        test = "example"; 
        console.log(`valor de test dentro do if ${test}`);
    }

    console.log(`valor de test após o if ${test}`);
})();