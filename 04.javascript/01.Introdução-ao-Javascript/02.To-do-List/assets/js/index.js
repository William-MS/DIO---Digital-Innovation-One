var novaTarefa = document.getElementById('novaTarefa');
var texto = novaTarefa.content;
var buttonAdd = document.getElementById('buttonAdd');
var lista = document.getElementById("lista");

function adicionar(){

    // lista.insertAdjacentHTML('beforeend', '<h2>' + texto + '</h2>');
    console.log(texto);
}

buttonAdd.addEventListener('click', adicionar);