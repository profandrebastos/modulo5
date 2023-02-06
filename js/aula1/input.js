const readline = require('readline');

const nome = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

nome.question('Qual o seu nome? ', (name) => {
  console.log(`Olá, ${name}!`);
});