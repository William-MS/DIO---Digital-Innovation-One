function compararNumeros(a, b){
    const frase = montarFrase1(a, b) + montarFrase2(a, b);

    return frase;
}

function montarFrase1(a, b){
    var frase1;
    (a == b) ? frase1 = `Os números ${a} e ${b} são iguais.` : frase1 = `Os números ${a} e ${b} não são iguais.`;

    return frase1;
}

function montarFrase2(a, b){
    var x = a + b;
    var frase2;

    ( x < 10) ? 
        frase2 = ` A soma dos números é ${x}, que é menor que 10.` 
    : (10 < x && x < 20) ? 
        frase2 = ` A soma dos números é ${x}, que é maior que 10 e menor que 20.`  
    :   
        frase2 = ` A soma dos números é ${x}, que é maior que 20.`; 

    return frase2;
}

console.log(compararNumeros(6, 6));