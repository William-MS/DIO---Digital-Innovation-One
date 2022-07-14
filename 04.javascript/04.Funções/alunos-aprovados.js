const alunos = [{nome : "maria", nota : 5},
                {nome : "joão", nota : 7},
                {nome : "augusto", nota : 8}];

let alunosAprovados = [];
let alunosReprovados = [];

function separarAlunos(array, media){  
    for(let i = 0; i < array.length; i++){

        const {nome, nota} = array[i];

        (nota >= media) ? alunosAprovados.push(nome) : alunosReprovados.push(nome);
    }
}

separarAlunos(alunos, 7);
console.log(alunosReprovados);