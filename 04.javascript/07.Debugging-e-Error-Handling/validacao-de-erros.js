
const meuArray = [1, 2, 3, 4];
const number = 5;


function validarArray(array, num){
    
    try {
        if (!array || !num) throw new ReferenceError('Parâmetro Inválido!');

        if (typeof array !== 'object') throw new TypeError("O array não é do tipo 'object'!");

        if (typeof number !== 'number') throw new TypeError("O número não é do tipo 'number'!");

        if (array.length !== number) throw new RangeError(`O número de elementos do array deve ser igual a ${number} !`);

        return array;
    } catch(e) {
        if(e instanceof ReferenceError) {
            console.log(e.message);
        } else if( e instanceof TypeError) {
            console.log(e.message);
        } else if( e instanceof RangeError) {
            console.log(e.message);
        } else {
            console.log('Erro não esperado');
        }
    }
}

console.log(validarArray(meuArray, number));