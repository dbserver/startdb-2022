class Forca {
  #estado = 'aguardando chute'

  get estado() {
    return this.#estado
  }

  set estado(value) {
    this.#estado = value
  }

  constructor(palavraSecreta) {
    this.palavraSecreta = palavraSecreta;
    this.vidas = 6;
    this.palavra = this.prepararIndexVazil(palavraSecreta.length);
    this.letrasAcertadas = 0
    this.letrasChutadas = [];
  }

  verifica = {
    letra: {
      existeNoArray(letra, array) {
        if (array.join('').search(letra) !== -1) {
          return true
        } else {
          return false
        }
      },

      existeNaPalavra(letra, palavra, callback) {
        for (const index in palavra) {
          let letraDaPalavra = palavra[index]
          if (letra === letraDaPalavra) {
            if (typeof callback === 'function')
              callback(letra, index)
          }
        }
      }
    }
  }

  prepararIndexVazil(totalIndex) {
    let ary = []
    for (let i = 0; i < totalIndex; i++) {
      ary.push('_')
    }
    return ary
  }

  chutar(letra) {
    //só passsa uma letra e que não foi digitada
    if (letra.length === 1 && !this.verifica.letra.existeNoArray(letra, this.letrasChutadas)) {
      this.letrasChutadas.push(letra)

      //verifica se aletra existe na palavraSecreta
      if (this.verifica.letra.existeNoArray(letra, this.palavraSecreta.split(''))) {
        //add a letra ao array da palavra
        this.verifica.letra.existeNaPalavra(letra, this.palavraSecreta, (letra, index) => {
          this.palavra[index] = letra
          this.letrasAcertadas += 1
        })

        //valida se ganhou
        if (this.vidas > 0 && this.letrasAcertadas === this.palavraSecreta.length) {
          this.estado = 'ganhou'
        }
      } else {
        //tira a vida se a palavra for incorreta
        this.vidas = this.vidas - 1
        //valida se perdeu
        if (this.vidas === 0)
          this.estado = 'perdeu'
      }
    }
  }

  buscarEstado() { return this.estado } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
  }
}

module.exports = Forca;
