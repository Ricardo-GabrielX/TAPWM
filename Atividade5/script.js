// Armazena as respostas dos usuários
const respostas = [];
const MAX_RESP = 45;

const formPesquisa = document.querySelector('#form-pesquisa');

// Evento principal do formulário
formPesquisa.addEventListener('submit', (evt) => {
    evt.preventDefault();

    if (respostas.length === MAX_RESP) {
        alert('Você já atingiu o limite máximo de registros.');
        return;
    }

    // Captura dos valores
    const idadeVal = Number(document.querySelector('#input-idade').value);
    const generoVal = document.querySelector('#input-genero').value;
    const opiniaoVal = Number(document.querySelector('#input-opiniao').value);

    // Guarda o registro
    respostas.push({
        idade: idadeVal,
        genero: generoVal,
        opiniao: opiniaoVal
    });

    atualizarPainel();
    formPesquisa.reset();
});

// Atualiza toda a interface
function atualizarPainel() {
    const total = respostas.length;

    // Atualiza contador superior
    document.querySelector('#progresso').textContent = `${total} / ${MAX_RESP}`;

    // Cálculo da média de idade
    const soma = respostas.reduce((acc, p) => acc + p.idade, 0);
    const media = (soma / total).toFixed(1);

    const listaIdades = respostas.map(p => p.idade);
    const maisVelho = Math.max(...listaIdades);
    const maisNovo = Math.min(...listaIdades);

    const qtdPessimo = respostas.filter(p => p.opiniao === 1).length;

    // Aprovados (3 e 4)
    const qtdPositivos = respostas.filter(p => p.opiniao >= 3).length;
    const percAprovado = ((qtdPositivos / total) * 100).toFixed(1);

    // Gêneros
    const generoCount = {
        masculino: respostas.filter(p => p.genero === "masculino").length,
        feminino: respostas.filter(p => p.genero === "feminino").length,
        outros: respostas.filter(p => p.genero === "outros").length
    };

    // Exibição nos elementos
    document.querySelector('#res-media').textContent = media;
    document.querySelector('#res-velho').textContent = maisVelho;
    document.querySelector('#res-novo').textContent = maisNovo;
    document.querySelector('#res-pessimo').textContent = qtdPessimo;

    document.querySelector('#res-aprovacao').textContent = `${percAprovado}%`;

    document.querySelector('#count-h').textContent = generoCount.masculino;
    document.querySelector('#count-m').textContent = generoCount.feminino;
    document.querySelector('#count-o').textContent = generoCount.outros;

    // Desabilita botão no limite
    if (total === MAX_RESP) {
        const botao = document.querySelector('#btn-enviar');
        botao.disabled = true;
        botao.classList.add('opacity-50', 'cursor-not-allowed');
    }
}