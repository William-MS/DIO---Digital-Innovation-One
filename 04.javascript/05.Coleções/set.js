const numbers = [30, 30, 40, 5, 223, 2049, 3034, 5];

function uniqueNumbers(array){
    const numbersSet = new Set(array);
    let numbersUni = [];

    for (value of numbersSet){
        numbersUni.push(value);
    }

    return numbersUni;
}

console.log(uniqueNumbers(numbers));