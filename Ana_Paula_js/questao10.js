var entrada = require('readline-sync');

var raio = parseInt(entrada.question('Digite o valor do raio: '));
var pi = 3.14;

var area_da_circunferencia = pi *(raio * raio);

console.log('A area da circunferência é', area_da_circunferencia);