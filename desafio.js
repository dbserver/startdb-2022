const readline = require('readline-sync');
const Forca = require('./src/forca');

const jogo = new Forca('abacaxi');

while (!["perdeu", "ganhou"].includes(jogo.buscarEstado())) {
    const chute = readline.question("Aguardando chute: \n");
    jogo.chutar(chute);
    console.log(jogo.buscarDadosDoJogo());
}
