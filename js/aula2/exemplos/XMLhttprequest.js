// Requisição para o randomuser.me utilizando o XMLHttpRequest e exibindo os dados na tela

var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;


// Cria o objeto XMLHttpRequest
var xhr = new XMLHttpRequest();

// Abre a conexão com o servidor
xhr.open('GET', 'https://randomuser.me/api/');

// Envia a requisição
xhr.send(null);

// Verifica se a requisição foi concluída
xhr.onreadystatechange = function() {
    if (xhr.readyState === 4) {
        // Converte a resposta para JSON
        var response = JSON.parse(xhr.responseText);
        // Exibe os dados na tela
        console.log(response);
    }
}