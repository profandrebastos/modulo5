const prompt = require('prompt-sync');
const input = prompt();

let myArray = [];

for(i=0;i<=3;i++){
  myArray.push(input("Palavra: "));
}
myArray.sort();
console.log(myArray);