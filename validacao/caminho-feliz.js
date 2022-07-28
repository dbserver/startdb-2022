const Forca = require('../desafio/forca');
const validarEtapa = require('./validar-etapa');

const palavraSecreta = 'abacaxi';
const jogoForca = new Forca(palavraSecreta);


let nota = 0;
let estadosEstaoCorretos = validarEtapa(6, '_______', '', 'aguardando chute', jogoForca);
nota += estadosEstaoCorretos.nota;

// ['a', 'b', 'c', 'x', 'i'].forEach((letra) => {
    // });

jogoForca.chutar('a');
nota += validarEtapa(6, 'a_a_a__', 'a', 'aguardando chute', jogoForca).nota;

jogoForca.chutar('b');
nota += validarEtapa(6, 'aba_a__', 'ab', 'aguardando chute', jogoForca).nota;

jogoForca.chutar('c');
nota += validarEtapa(6, 'abaca__', 'abac', 'aguardando chute', jogoForca).nota;

jogoForca.chutar('x');
nota += validarEtapa(6, 'abacax_', 'abacx', 'aguardando chute', jogoForca).nota;

jogoForca.chutar('i');

let estadosAposChute = validarEtapa(6, 'abacaxi', 'abcxi', 'ganhou', jogoForca);
nota += estadosAposChute.nota;

estadosEstaoCorretos = estadosEstaoCorretos.etapaValida && estadosAposChute.etapaValida;

console.log("Nota final " + nota);
const mensagemFinal =  estadosEstaoCorretos == true ? "Regras validadas com sucesso" :
"Parece que algo está errado, verique suas regras";
console.log(mensagemFinal);
