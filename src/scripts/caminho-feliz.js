const Forca = require('../forca');
const validarEtapa = require('./validar-etapa');

const palavraSecreta = 'abacaxi';
const jogoForca = new Forca(palavraSecreta);

let estadosEstaoCorretos = validarEtapa(6, '_______', '', 'aguardando chute', jogoForca);

['a', 'b', 'c', 'x', 'i'].forEach((letra) => jogoForca.chutar(letra));

estadosEstaoCorretos = estadosEstaoCorretos && validarEtapa(6, 'abacaxi', 'abcxi', 'ganhou', jogoForca);
console.log(estadosEstaoCorretos);
