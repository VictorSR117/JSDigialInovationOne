function fn() {
    log("Hosting de função");

    function log(value) {
        console.log(value);
    }
}

fn();

// function fn() {
//     function log(value) {
//         console.log(value);
//     }

//     log("Hosting de função");
// }