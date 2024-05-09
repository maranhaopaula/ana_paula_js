var entrada = require('readline-sync');

var num = parseInt(entrada.question('Digite um numero? '));

if(num % 2 == 0){
    console.log ("par")
}else {
    console.log("impar")
}
