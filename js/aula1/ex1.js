const prompt = require('prompt-sync');
const input = prompt();

let key = input("Digite algo diferente de Professor Chato: ");
if (key === "Professor Chato"){
  console.log("Resposta Errada!!!");
}
else {
  console.log("Resposta Correta!");

}