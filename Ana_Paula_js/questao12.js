var entrada = require('readline-sync');

var numero = parseFloat(entrada.question('Digite um numero : '));
var percentual = numero * 0.75;

console.log('o percentual do numero digitado é: ', percentual, '%' );
