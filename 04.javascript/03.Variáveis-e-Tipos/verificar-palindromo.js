//função para checar se a frase é um palíndromo
function checkPalindrome(string){
    if (!string) return;

    let stringMin = string.toLowerCase();     //tornar todas as letras minúsculas
    let stringArray = stringMin.split("");    //separa os caracteres da string formando um array

    for (let i = 0; i < stringArray.length; i++){
        if(stringArray[i] == " "){
            stringArray[i] = "";
        }
    }

    let stringNormal = stringArray.join("");              //junta os elementos do array formando uma string
    let stringReverse = stringArray.reverse().join("");   //inverte os elementos do array e junta eles formando uma string

    if(stringNormal == stringReverse){
        return "A frase é um palíndromo!";
    } else {
        return "A frase não é um palíndromo!";
    }
}

let frase = "Roma me tem amor";

console.log(checkPalindrome(frase));