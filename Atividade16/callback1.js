const entradaDeDados = require('prompt-sync')();

function exibirBoasVindas(nomeUsuario) {
    console.log(`Olá, ${nomeUsuario}! Seja bem-vindo(a).`);
}

function solicitarNomeDoUsuario(funcaoCallback) {
    const nomeDigitado = entradaDeDados('Por favor, digite o seu nome: ');
    funcaoCallback(nomeDigitado);
}

solicitarNomeDoUsuario(exibirBoasVindas);