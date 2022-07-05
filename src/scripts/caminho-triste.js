const Forca = require('../forca');

const palavraSecreta = 'abacaxi';
const jogoForca = new Forca(palavraSecreta);

console.log(jogoForca.buscarDadosDoJogo().vidas === 6);

jogoForca.chutar('e');

console.log(jogoForca.buscarDadosDoJogo().vidas === 5);
console.log(jogoForca.buscarDadosDoJogo().palavra.join('') === '_______');

jogoForca.chutar('d');

console.log(jogoForca.buscarDadosDoJogo().vidas === 4);
console.log(jogoForca.buscarDadosDoJogo().palavra.join('') === '_______');

jogoForca.chutar('u');

console.log(jogoForca.buscarDadosDoJogo().vidas === 3);
console.log(jogoForca.buscarDadosDoJogo().palavra.join('') === '_______');

jogoForca.chutar('m');

console.log(jogoForca.buscarDadosDoJogo().vidas === 2);
console.log(jogoForca.buscarDadosDoJogo().palavra.join('') === '_______');

jogoForca.chutar('l');

console.log(jogoForca.buscarDadosDoJogo().vidas === 1);
console.log(jogoForca.buscarDadosDoJogo().palavra.join('') === '_______');

jogoForca.chutar('p');

console.log(jogoForca.buscarDadosDoJogo().letrasChutadas.join('') === 'edumlp');
console.log(jogoForca.buscarDadosDoJogo().vidas === 0);
console.log(jogoForca.buscarEstado() === 'perdeu');
