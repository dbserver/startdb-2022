class Forca {
  #estado = 'aguardando chute';

  #ganhou = 'ganhou';
  #perdeu = 'perdeu';

  #palavraSecreta = '';
  #arrayPalavraSecreta = [];
  #compreimentoPalavraSecreta = 0;

  #vidas = 6;
  #minVida = 1;

  #maxChutePorVez = 1;
  #compreimentoDoChute = 0;

  #letrasAcertadas = 0;
  #letrasChutadas = [];

  palavra = [];

  constructor(palavraSecreta) {
    this.palavraSecreta = palavraSecreta;
    this.compreimentoPalavraSecreta = palavraSecreta.length;
    this.arrayPalavraSecreta = this.palavraSecreta.split('');
    this.palavra = this.#prepararIndexVazil(this.compreimentoPalavraSecreta);
  }

  get estado() {
    return this.#estado;
  }

  set estado(valor) {
    return this.#estado = valor;
  }

  get ganhou() {
    return this.#ganhou;
  }

  get perdeu() {
    return this.#perdeu;
  }

  get palavraSecreta() {
    return this.#palavraSecreta;
  }

  set palavraSecreta(valor) {
    return this.#palavraSecreta = valor;
  }

  get arrayPalavraSecreta() {
    return this.#arrayPalavraSecreta;
  }

  set arrayPalavraSecreta(valor) {
    return this.#arrayPalavraSecreta = valor;
  }

  get compreimentoPalavraSecreta() {
    return this.#compreimentoPalavraSecreta;
  }

  set compreimentoPalavraSecreta(valor) {
    return this.#compreimentoPalavraSecreta = valor;
  }

  get vidas() {
    return this.#vidas;
  }

  set vidas(valor) {
    return this.#vidas = valor;
  }

  get minVida() {
    return this.#minVida;
  }

  get maxChutePorVez() {
    return this.#maxChutePorVez;
  }

  get compreimentoDoChute() {
    return this.#compreimentoDoChute;
  }

  set compreimentoDoChute(valor) {
    return this.#compreimentoDoChute = valor;
  }

  get letrasAcertadas() {
    return this.#letrasAcertadas;
  }

  set letrasAcertadas(valor) {
    return this.#letrasAcertadas = valor;
  }

  get letrasChutadas() {
    return this.#letrasChutadas;
  }

  set letrasChutadas(valor) {
    return this.#letrasChutadas.push(valor);
  }

  #prepararIndexVazil(totalIndex) {
    let ary = [];
    for (let i = 0; i < totalIndex; i++) {
      ary.push('_');
    }
    return ary;
  }

  #existeNoArray(valor, array) {
    if (array.join('').search(valor) !== -1) {
      return true;
    }
    return false;
  }

  #adicionarLetraNaPosicaoCoreta(letra, index) {
    this.palavra[index] = letra
  }

  #incrementarLetraAcertada() {
    this.letrasAcertadas += 1;
  }

  #trataValorAcertado(letra, array) {
    array.forEach((valor, index) => {
      if (letra === valor) {
        this.#adicionarLetraNaPosicaoCoreta(valor, index)
        this.#incrementarLetraAcertada()
      }
    });
  }

  #verificaSeGanhou() {
    if (this.vidas >= this.minVida && this.letrasAcertadas === this.compreimentoPalavraSecreta)
      this.estado = this.ganhou;
  }

  #verificaSePerdeu() {
    this.vidas -= 1;
    if (this.vidas < this.minVida)
      this.estado = this.perdeu;
  }

  chutar(letra) {
    this.compreimentoDoChute = letra.length;

    if (this.compreimentoDoChute > this.maxChutePorVez || this.#existeNoArray(letra, this.letrasChutadas)) return;

    this.letrasChutadas = letra;

    if (this.#existeNoArray(letra, this.arrayPalavraSecreta)) {
      this.#trataValorAcertado(letra, this.arrayPalavraSecreta);

      this.#verificaSeGanhou();
      return;
    }

    this.#verificaSePerdeu();
  }

  buscarEstado() { return this.estado; } // Possiveis valores: "perdeu", "aguardando chute" ou "ganhou"

  buscarDadosDoJogo() {
    return {
      letrasChutadas: this.letrasChutadas, // Deve conter todas as letras chutadas
      vidas: this.vidas, // Quantidade de vidas restantes
      palavra: this.palavra // Deve ser um array com as letras que já foram acertadas ou o valor "_" para as letras não identificadas
    }
  }
}

module.exports = Forca;
