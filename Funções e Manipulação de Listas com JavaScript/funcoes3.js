function func1() {
    console.log(this);
}

const func2 = () => { //não tem this
    console.log(this);
}

const renan = {
    nome: "renan",
    func1,
    func2
}

renan.func1()
renan.func2()