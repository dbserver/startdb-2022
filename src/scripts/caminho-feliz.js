const Forca = require('../forca');

const palavraSecreta = 'abacaxi';
const jogoForca = new Forca(palavraSecreta);

console.log(jogoForca.buscarDadosDoJogo().vidas === 6);

jogoForca.chutar('a');

jogoForca.chutar('b');

jogoForca.chutar('c');

jogoForca.chutar('x');

jogoForca.chutar('i');

console.log(jogoForca.buscarDadosDoJogo().letrasChutadas.join('') === 'abcxi');
console.log(jogoForca.buscarDadosDoJogo().vidas === 6);
console.log(jogoForca.buscarEstado() === 'ganhou');
