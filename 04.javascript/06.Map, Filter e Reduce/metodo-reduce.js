const nums = [1, 2];

function somarNumeros(array){
    
    return array.reduce(function(prev, current){
        return prev + current;
    }, 0);
}

console.log(somarNumeros(nums));
