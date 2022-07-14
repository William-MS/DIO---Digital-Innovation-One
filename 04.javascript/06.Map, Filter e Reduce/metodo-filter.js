const nums = [1, 23, 55, 67, "maça", 30, 2, 4];

function filtrarPares(array){
    return array.filter(callback);
}

function callback(item) {
    return item % 2 === 0;
}

console.log(filtrarPares(nums));