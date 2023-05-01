function getName() {
    return 'Victor Luiz Lopes da Silva'
}

function logFn(fn) {
    console.log(fn());
}

const logFnResult = logFn;

logFnResult(getName);