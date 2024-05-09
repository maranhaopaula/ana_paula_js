var entrada = require('readline-sync');

var a = parseInt(entrada.question('Digite a idade do irmao A: '));
var b = parseInt(entrada.question('Digite a idade do irmao B: '));
var c = parseInt(entrada.question('Digite a idade do irmao c: '));

if( a < (b+c)) {
    console.log(`A idade do irmão A é ${a} anos, logo, é menor que a soma dos irmãos B e C !`)

}else{
    console.log(`A idade do irmão A é ${a} anos, logo, a mesma é maior que a soma dos irmãos B e C!`)
}