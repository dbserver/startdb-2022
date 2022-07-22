const Forca = require('../desafio/forca');
const validarEtapa = require('./validar-etapa');

const palavraSecreta = 'abacaxi';
const jogoForca = new Forca(palavraSecreta);

const palavraEsperada = '_______';
const estadoEsperado = 'aguardando chute'

let nota = 0;
let estadosEstaoCorretos = false;


let validacao = validarEtapa(6, palavraEsperada, '', estadoEsperado, jogoForca);
nota+= validacao.nota;

jogoForca.chutar('e');
let validacaoDois = validarEtapa(5, palavraEsperada, 'e', estadoEsperado, jogoForca);
nota+= validacaoDois.nota;
estadosEstaoCorretos = validacao.etapaValida && validacaoDois.etapaValida;

jogoForca.chutar('d');
let validacaoTres = validarEtapa(4, palavraEsperada, 'ed', estadoEsperado, jogoForca);
nota+= validacaoTres.nota;
estadosEstaoCorretos = estadosEstaoCorretos && validacaoTres.etapaValida;

jogoForca.chutar('da');
let validacaoQuatro = validarEtapa(4, palavraEsperada, 'ed', estadoEsperado, jogoForca);
nota+= validacaoQuatro.nota;
estadosEstaoCorretos = estadosEstaoCorretos && validacaoQuatro.etapaValida;

jogoForca.chutar('u');
let validacaoCinco = validarEtapa(3, palavraEsperada, 'edu', estadoEsperado, jogoForca);
nota+= validacaoCinco.nota;
estadosEstaoCorretos = estadosEstaoCorretos && validacaoCinco.etapaValida;

jogoForca.chutar('u');
let validacaoSeis = validarEtapa(3, palavraEsperada, 'edu', estadoEsperado, jogoForca);
nota+= validacaoSeis.nota;
estadosEstaoCorretos = estadosEstaoCorretos && validacaoSeis.etapaValida;

jogoForca.chutar('m');
let validacaoSete = validarEtapa(2, palavraEsperada, 'edum', estadoEsperado, jogoForca);
nota+= validacaoSete.nota;
estadosEstaoCorretos = estadosEstaoCorretos && validacaoSete.etapaValida;

jogoForca.chutar('l');
let validacaoOito = validarEtapa(1, palavraEsperada, 'eduml', estadoEsperado, jogoForca);
nota+= validacaoOito.nota;
estadosEstaoCorretos = estadosEstaoCorretos && validacaoOito.etapaValida;

jogoForca.chutar('p');
let validacaoNove = validarEtapa(0, palavraEsperada, 'edumlp', 'perdeu', jogoForca);
nota+= validacaoNove.nota;
estadosEstaoCorretos = estadosEstaoCorretos && validacaoNove.etapaValida;

console.log("Nota final " + nota);

const mensagemFinal =  estadosEstaoCorretos == true ? "Regras validadas com sucesso" :
"Parece que algo está errado, verique suas regras";
console.log(mensagemFinal);
