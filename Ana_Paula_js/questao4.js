var entrada = require('readline-sync');

var nota1 = parseFloat(entrada.question('Digite a primeira nota? '));
var nota2 = parseFloat(entrada.question('Digite a segunda nota? '));
soma = (nota1 + nota2) /2

console.log ('A sua media é: ', (soma)); 
