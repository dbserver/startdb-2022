# Como implementar o desafio?

Para o desafio definimos uma estrutura a ser seguida de forma que lhe auxilie no que deve ser entregue e também nos ajude a corrigir e executar o código. A linguagem escolhida foi o Javascript (ou JS) e você pode encontrar mais detalhes sobre instalação no [README](../README.md).

## Estrutura de diretórios

![estrutura de diretórios](./estrutura.jpeg)

### O arquivo fonte `desafio/desafio.js`

Esse arquivo contém uma lógica simples que simula o jogo no terminal. Dessa forma, você pode interagir com as regras que você implementou através do jogo. **Esse arquivo não precisa ser modificado**.
Você pode rodar o jogo através do comando:
```bash
node desafio.js
```
> Obs: para rodar o comando você precisa estar na raiz do diretório.

### O arquivo fonte `desafio/forca.js`
Esse arquivo contém uma estrutura base que define como iremos interagir com a sua implementação (métodos `chutar`, `buscarEstado` e `buscarDadosDoJogo`), logo, toda sua lógica deve ser implementada nesse arquivo. Você pode criar outros métodos/classes para organizar o seu código, porém **não deve alterar o nome dos métodos já criados**.

### O arquivo fonte `validacao/caminho-feliz.js`
Esse arquivo contém a simulação de um jogo onde o jogador acerta todas as letras e a cada rodada vai coletando e validando os dados no estado do jogo. Ele pode lhe auxiliar na validação da implementação final. **Esse arquivo não precisa ser modificado**.
Você pode rodar essa validação através do comando:
```bash
node validacao/caminho-feliz.js
```

### O arquivo fonte `validacao/caminho-triste.js`
Esse arquivo contém a simulação de um jogo onde o jogador erra todas as letras e a cada rodada vai coletando e validando os dados no estado do jogo. Ele pode lhe auxiliar na validação da implementação final. **Esse arquivo não precisa ser modificado**.
Você pode rodar essa validação através do comando:
```bash
node validacao/caminho-triste.js
```
### O arquivo fonte `validacao/validar-etapa.js`
Esse arquivo é usado nos scripts acima para ajudar nas validações.
**Esse arquivo não precisa ser modificado**.

## Regras do jogo

As regras que devem ser implementadas são:

1. O jogo deve iniciar com 6 vidas
2. O jogo deve iniciar com o estado `aguardando chute`.
3. Todo chute deve conter apenas uma letra, caso tenha mais de uma a jogada deve ser ignorada, ou seja, não deve alterar nenhum estado.
4. Caso a letra chutada esteja errada mas já foi chutada anteriormente a jogada deve ser ignorada, ou seja, não deve alterar nenhum estado.
5. Toda chamada ao método chutar deve registrar a letra em letrasChutadas
6. Se a letra chutada não estiver contida na palavra, deve subtrair uma vida
7. Se a letra chutada estiver contida na palavra, deve ser substituida na "palavra" em sua respectiva posição. 
Ex.: A palavra secreta é "bala" e o jogador chutou a letra "b", então a palavra que é retornada no método buscarDadosDoJogo, deve ser ["b", "_", "_", "_" ].
8. Caso a quantidade de vidas chegue a 0 (zero), o estado do jogo deve mudar para `perdeu`.
9. Caso a quantidade de vidas seja maior que zero e o jogador acerte a última letra, o estado do jogo deve mudar para `ganhou`.
