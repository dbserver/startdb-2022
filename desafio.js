const readline = require("readline-sync");
const Forca = require("./forca");

const jogo = new Forca("abacaxi");

while (!["perdeu", "ganhou"].includes(jogo.buscarEstado())) {
  const chute = readline.question("Aguardando chute: \n");
  jogo.chutar(chute);
  console.log(jogo.buscarDadosDoJogo());
}

console.log("você " + jogo.buscarEstado());

/*

Obs.: A validação enviada por vocês, por algum motivo, não funciona com esse código...
Mas, testando com o "npm start" e colocando os valores, funciona perfeitamente com todas as solicitações feitas

*/
