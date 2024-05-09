var entrada = require('readline-sync');

var largura = parseInt(entrada.question('Digite o valor da largura: '));
var comprimento = parseInt(entrada.question('Digite o valor do comprimento: '));
var area_do_terreno = (10 * 20);
var area_construida = largura * comprimento;
var area_restante = area_do_terreno - area_construida;


console.log('A área restante em metros é: ', area_restante)