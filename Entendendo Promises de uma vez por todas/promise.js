const promise = new Promise((resolve, reject) => {
    setTimeout(() => reject("end"), 2000);
});
// const promise = new Promise((resolve, reject) => {
//     setTimeout(() => resolve("end"), 2000);
// });

console.log("begin");

//maneiras de executar uma promise

// promise.then((data) => console.log(data));
// promise.then((data) => console.log(data)).catch((err) => console.log("deu merda erro: ", err));
// promise.then(console.log);
// promise.then((res) => {});
// promise.then((rej) => {});
promise.then((res) => {}, (rej) => {});