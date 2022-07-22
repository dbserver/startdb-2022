const validarEtapa = (vidasEsperadas, palavraEsperada, letrasChutadasEsperadas, estadoEsperado, jogoForca) => {
    const { vidas, palavra: arrPalavra, letrasChutadas: arrLetrasChutadas } = jogoForca.buscarDadosDoJogo();
    const palavra = arrPalavra.join('');
    const letrasChutadas = arrLetrasChutadas.join('');
    const estado = jogoForca.buscarEstado();

    let nota = 1;
    nota += calcularNota(vidas === vidasEsperadas);
    nota += calcularNota(palavra === palavraEsperada);
    nota += calcularNota(letrasChutadas === letrasChutadasEsperadas);
    nota += calcularNota(estado === estadoEsperado);

    return {
        "nota":nota,
        "etapaValida": nota == 5
    };
}

const calcularNota = (estado) => {
    if(estado){
        return 1;
    }
    return 0;
} 

module.exports = validarEtapa;