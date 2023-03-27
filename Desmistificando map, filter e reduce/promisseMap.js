let items = ["a", "b", "c", "d"];

;(async () => { //também não sei por que tem um ; no começo dessa função, não me pergunte
    const promiseFunction = async element => {
        return new Promise((resolve, reject) => {
            return resolve(`${element} - promise`)
        });
    }

    // let itemMapped = promiseFunction("x");
    // console.log(await itemMapped);

    let itemsMappedPromises = items.map(promiseFunction)
    let itemsMapped = await Promise.all(itemsMappedPromises)

    console.log(itemsMapped);
})()