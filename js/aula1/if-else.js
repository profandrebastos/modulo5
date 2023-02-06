const prompt = require('prompt-sync');
const input = prompt();

var verify = input("Digite um número entre 2 e 20: ");

if (verify > 2 && verify < 20) {
    console.log("Resposta correta.");
}
else
    console.log("Tente novamente.");