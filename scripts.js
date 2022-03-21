

function calculaPontos(jogador) {
    let pontos = (jogador.vitorias * 3) + jogador.empates;
    return pontos;
}

let jogadores = [];

function exibeJogadoresNaTela(jogadores) {
    let elemento = ""

    for (let i = 0; i < jogadores.length; i++) {

        elemento += "<tr><td>" + jogadores[i].nome + "</td>"
        elemento += "<td>" + jogadores[i].vitorias + "</td>"
        elemento += "<td>" + jogadores[i].empates + "</td>"
        elemento += "<td>" + jogadores[i].derrotas + "</td>"
        elemento += "<td>" + jogadores[i].pontos + "</td>"
        elemento += "<td><button onClick=adicionarVitoria(" + i + ")>Vitória</button></td>"
        elemento += "<td><button onClick=adicionarEmpate(" + i + ")>Empate</button></td>"
        elemento += "<td><button onClick=adicionarDerrota(" + i + ")>Derrota</button></td>"
        elemento += "</tr>"

    }

    let tabelaJogadores = document.getElementById("tabelaJogadores")
    tabelaJogadores.innerHTML = elemento

}

exibeJogadoresNaTela(jogadores)

function adicionarVitoria(i) {
    let jogador = jogadores[i]
    jogador.vitorias++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}

function adicionarEmpate(i) {
    let jogador = jogadores[i]
    jogador.empates++
    jogador.pontos = calculaPontos(jogador)
    exibeJogadoresNaTela(jogadores)
}

function adicionarDerrota(i) {
    let jogador = jogadores[i]
    jogador.derrotas++
    exibeJogadoresNaTela(jogadores)
}


function adicionarNovoJogador() {

    let nomeJogador = document.getElementById("adicionarJogador").value

    let novoJogador = {
        nome: nomeJogador,
        vitorias: 0,
        empates: 0,
        derrotas: 0,
        pontos: 0,
    }

    jogadores.push(novoJogador);
    exibeJogadoresNaTela(jogadores)

    document.getElementById("adicionarJogador").value = "";

}

function excluirJogador() {

    let nomeJogador = document.getElementById("adicionarJogador").value

    for (let i = 0; i < jogadores.length; i++) {

        if (jogadores[i].nome == nomeJogador) {

            jogadores.splice(i, 1)

        }
    }

    exibeJogadoresNaTela(jogadores)

    document.getElementById("adicionarJogador").value = "";

}