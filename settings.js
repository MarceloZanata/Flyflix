function myFunction() {
    var header = document.getElementById('header');
    

    if (header) {
        header.classList.toggle('light'); // Alterna a classe 'light' no header
    }
}
function myFunction1() {
    var body = document.getElementById('body');
    if (body) {
        body.classList.toggle('light-mode'); // Alterna a classe 'light-mode' no body
    }
}

// Adiciona o event listener ao botão quando o DOM está carregado
document.addEventListener('DOMContentLoaded', function() {
    var button = document.getElementById('toggleButton');
    if (button) {
        button.addEventListener('click', myFunction);
        button.addEventListener('click', myFunction1); // Adiciona o listener de clique
    }
});