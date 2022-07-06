const validarEtapa = (vidasEsperadas, palavraEsperada, letrasChutadasEsperadas, estadoEsperado, jogoForca) => {
    const { vidas, palavra: arrPalavra, letrasChutadas: arrLetrasChutadas } = jogoForca.buscarDadosDoJogo();
    const palavra = arrPalavra.join('');
    const letrasChutadas = arrLetrasChutadas.join('');
    const estado = jogoForca.buscarEstado();

    return vidas === vidasEsperadas
        && palavra === palavraEsperada
        && letrasChutadas === letrasChutadasEsperadas
        && estado === estadoEsperado;
}

module.exports = validarEtapa;