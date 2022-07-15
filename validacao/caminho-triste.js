const Forca = require('../desafio/forca');
const validarEtapa = require('./validar-etapa');

const palavraSecreta = 'abacaxi';
const jogoForca = new Forca(palavraSecreta);

const palavraEsperada = '_______';
const estadoEsperado = 'aguardando chute'

let estadosEstaoCorretos = validarEtapa(6, palavraEsperada, '', estadoEsperado, jogoForca);

jogoForca.chutar('e');
estadosEstaoCorretos = estadosEstaoCorretos && validarEtapa(5, palavraEsperada, 'e', estadoEsperado, jogoForca);

jogoForca.chutar('d');
estadosEstaoCorretos = estadosEstaoCorretos && validarEtapa(4, palavraEsperada, 'ed', estadoEsperado, jogoForca);

jogoForca.chutar('da');
estadosEstaoCorretos = estadosEstaoCorretos && validarEtapa(4, palavraEsperada, 'ed', estadoEsperado, jogoForca);

jogoForca.chutar('u');
estadosEstaoCorretos = estadosEstaoCorretos && validarEtapa(3, palavraEsperada, 'edu', estadoEsperado, jogoForca);

jogoForca.chutar('u');
estadosEstaoCorretos = estadosEstaoCorretos && validarEtapa(3, palavraEsperada, 'edu', estadoEsperado, jogoForca);

jogoForca.chutar('m');
estadosEstaoCorretos = estadosEstaoCorretos && validarEtapa(2, palavraEsperada, 'edum', estadoEsperado, jogoForca);

jogoForca.chutar('l');
estadosEstaoCorretos = estadosEstaoCorretos && validarEtapa(1, palavraEsperada, 'eduml', estadoEsperado, jogoForca);

jogoForca.chutar('p');
estadosEstaoCorretos = estadosEstaoCorretos && validarEtapa(0, palavraEsperada, 'edumlp', 'perdeu', jogoForca);

const mensagemFinal =  estadosEstaoCorretos == true ? "Regras validadas com sucesso" :
"Parece que algo está errado, verique suas regras";
console.log(mensagemFinal);
