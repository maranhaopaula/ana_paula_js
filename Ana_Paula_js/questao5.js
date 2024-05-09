var entrada = require('readline-sync');

var num1 = parseInt(entrada.question('Digite um numero? '));
var num2 = parseInt(entrada.question('Digite outro numero? '));

if(num1 != num2){
    console.log("verdadeiro")
}else {
    console.log ("Falso")
}