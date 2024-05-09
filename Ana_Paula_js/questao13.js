var entrada = require('readline-sync');

var salario_bruto = parseFloat(entrada.question('Digite o seu salario bruto : '));
var inss = salario_bruto * 0.12;
var fgts = salario_bruto * 0.08;
var salario_liquido = salario_bruto - inss;

console.log('O salario liquido é: ', salario_liquido,  'reais');
console.log('Seu inss e de: ', inss, 'reais');
console.log('Seu fgts e de: ', fgts, 'reais');
