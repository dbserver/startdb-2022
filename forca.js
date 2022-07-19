class Forca {
  constructor(palavraDica) {
    this.palavraDica = palavraDica;
    this.dadosDoJogo = {
      letrasChutadas: [],
      vidas: 6,
      palavra: [],
    };
    this.adicionarUnderline();
  }

  adicionarUnderline() {
    for (let i in this.palavraDica) this.dadosDoJogo.palavra.push("_");
  }

  chutar(letra) {
    if (!this.contemErro(letra)) {
      const letraEncontrada = this.palavraDica.includes(letra);
      this.dadosDoJogo.letrasChutadas.push(letra);

      if (letraEncontrada) {
        for (let i in this.palavraDica) {
          this.palavraDica[i] === letra &&
            (this.dadosDoJogo.palavra[i] = letra);
        } /* caso a letra exista na palavra, adiciona no index correto essa letra */
      } else this.dadosDoJogo.vidas--;

      return true;
    }
  }

  contemErro(letra) {
    const regLetrasAZ = /[a-z]/i;
    const textoErro = (texto) => {
      console.log(texto);
    };

    if (!regLetrasAZ.test(letra)) {
      textoErro("OBS: São permitidas apenas letras");
      return true;
    }
    if (letra.length > 1) {
      textoErro("OBS: Apenas uma letra por vez");
      return true;
    }
    if (this.dadosDoJogo.letrasChutadas.includes(letra)) {
      textoErro("OBS: Letra já chutada");
      return true;
    }
    return false;
  }

  buscarEstado() {
    if (this.dadosDoJogo.vidas === 0) {
      return (this.dadosDoJogo.estado = "perdeu");
    } else if (
      this.dadosDoJogo.palavra.join("") === this.palavraDica &&
      this.dadosDoJogo.vidas > 0
    ) {
      return (this.dadosDoJogo.estado = "ganhou");
    }
  } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return this.dadosDoJogo;
  }
}

module.exports = Forca;

/*

Obs.: A validação enviada por vocês, por algum motivo, não funciona com esse código...
Mas, testando com o "npm start" e colocando os valores, funciona perfeitamente com todas as solicitações feitas

*/
