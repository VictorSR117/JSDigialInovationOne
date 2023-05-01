(() => {
    let test = "valor função";
    console.log(`valor de test dentro da função ${test}`);
    
    if (true) {
        let test = "valor if"; 
        console.log(`valor de test dentro do if ${test}`);
    }

    if (true) {
        let test = "valor de outro if"; 
        console.log(`valor de test dentro do outro if ${test}`);
    }

    console.log(`valor de test após o if ${test}`);
})();