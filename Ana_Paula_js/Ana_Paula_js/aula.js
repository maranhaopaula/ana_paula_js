var entrada = require("readline-sync");

var nome = entrada.question('Qual o seu nome?');
var sobre = entrada.question('Qual o seu sobrenome?');
var sobrenome = nome + sobre

console.log('Seu nome é' ,nome,sobre);


var num = parseInt(entrada.question('Digite um numero:'))

var num2 = parseInt(entrada.question('Digite outro numero:'))

var some = num+num2

console.log(' A soma dos números digitados é:' ,some);



