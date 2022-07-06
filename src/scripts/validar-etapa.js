const validarEtapa = (vidasEsperadas, palavraEsperada, letrasChutadasEsperadas, estadoEsperado, jogoForca) => {
    const { vidas, palavra: arrPalavra, letrasChutadas: arrLetrasChutadas } = jogoForca.buscarDadosDoJogo();
    const palavra = arrPalavra.join('');
    const letrasChutadas = arrLetrasChutadas.join('');

    return vidas === vidasEsperadas
        && palavra === palavraEsperada
        && letrasChutadas === letrasChutadasEsperadas
        && jogoForca.buscarEstado() === estadoEsperado;
}

module.exports = validarEtapa;