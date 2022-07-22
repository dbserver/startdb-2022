const Forca = require('../desafio/forca');
const validarEtapa = require('./validar-etapa');

const palavraSecreta = 'abacaxi';
const jogoForca = new Forca(palavraSecreta);


let nota = 0;
let estadosEstaoCorretos = validarEtapa(6, '_______', '', 'aguardando chute', jogoForca);
nota += estadosEstaoCorretos.nota;

['a', 'b', 'c', 'x', 'i'].forEach((letra) => {
    jogoForca.chutar(letra)
});

let estadosAposChute = validarEtapa(6, 'abacaxi', 'abcxi', 'ganhou', jogoForca);
nota += estadosAposChute.nota;

estadosEstaoCorretos = estadosEstaoCorretos.etapaValida && estadosAposChute.etapaValida;

console.log("Nota final " + nota);
const mensagemFinal =  estadosEstaoCorretos == true ? "Regras validadas com sucesso" :
"Parece que algo está errado, verique suas regras";
console.log(mensagemFinal);
