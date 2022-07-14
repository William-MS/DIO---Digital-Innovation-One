function trocarNumeros(array){
    if (!array.lenght) return -1;

    for(let i = 0; i < array.length; i++){
        if(array[i]%2 === 0 && array[i] !== 0){
            array[i] = 0;
        }
    }

    return array;
}

let teste = [];

console.log(trocarNumeros(teste));