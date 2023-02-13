const prompt = require('prompt-sync');
const input = prompt();

const collection = [];
let listen; 
var i = 0;


do{
  listen = input('Digite uma propriedade do CSS: ');
  collection.push(listen);
  i++;
}while(listen.toUpperCase() != 'SAIR');

if(i == 1){
  collection[0] = 'Nenhuma propriedade digitada';
} else {
  collection.pop();
}

const collectionJSON = JSON.stringify(collection.sort());
const listJSON = JSON.parse(collectionJSON);
console.log(listJSON);
