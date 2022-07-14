
const pessoa1 = {
    nome : "Fabrício",
    idade : 23
}

const pessoa2 = {
    nome : "Júlio",
    idade : 40
}

function calcularIdade(anos){
    return `Daqui a ${anos} anos, ${this.nome} terá ${this.idade + anos} anos de idade`;
}

console.log(calcularIdade.call(pessoa1, 30));

console.log(calcularIdade.apply(pessoa2, [30]));