
class Forca {
  letrasChutadas = new Array(); // Deve conter todas as letras chutadas
  vidas = 6; // Quantidade de vidas restantes
  palavra = new Array(); // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
  palavraCompleta = new Array(); // Array de controle da palavra correta
  palavraControle = new Array();
  estado = "aguardando chute";
  ganhou = false;

  constructor(palavra) {
    Array.from(palavra).forEach((letra) => {
      this.palavra.push("_");
      this.palavraCompleta.push(letra);
      this.palavraControle.push(letra);
    });
  }

  chutar(letra) {
    if(letra.length > 1 || this.letrasChutadas.includes(letra)){
      return '';
    }

    //executa regras 4 e 6 definidas nas regras do jogo
    if (
      !this.palavraCompleta.includes(letra) &&
      !this.letrasChutadas.includes(letra)
    ) {
      this.vidas--;
    }

    //executa regra 3 definida nas regras do jogo
    this.letrasChutadas.push(letra);

    //executa regra 5 definida nas regras do jogo
    while (this.palavraControle.includes(letra)) {
      this.palavra.splice(this.palavraControle.indexOf(letra), 1, letra); //adiciona a letra na posição correta
      this.palavraControle.splice(this.palavraControle.indexOf(letra), 1, ""); //remove a letra do array de controle
    }

    this.alteraEstado();
  }

  alteraEstado() {
    if (this.vidas <= 0) {
      this.estado = "perdeu";
    }
    if (this.palavraCompleta.toString() == this.palavra.toString()) {
      this.estado = "ganhou";
    }
  }

  buscarEstado() {
    return this.estado;
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.palavra, // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    };
  }
}

module.exports = Forca;