var entrada = require('readline-sync');


var salario_bruto = parseFloat(entrada.question('Qual e seu salario bruto: '));
var fgts = salario_bruto * 0.08
var inss = salario_bruto * 0.12
var salario_liquido = salario_bruto - inss

console.log('Seu salario liquido é: ', salario_liquido, 'reais');
console.log('Sua retencao de inss é:', inss, 'reais');
console.log('O fgts a ser depositado e de:', fgts, 'reais')



