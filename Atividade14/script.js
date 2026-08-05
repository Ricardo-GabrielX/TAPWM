function validar() {
    const form = document.meuFormulario;
    const nome = form.elements['nome'].value;
    const comentario = form.elements['comentario'].value;
    const pesquisaRadios = form.elements['pesquisa'];

    if (nome.trim().length < 10) {
        alert("Erro: O Nome não pode ter menos que 10 caracteres.");
        return false; // Bloqueia o envio
    }
    if (comentario.trim().length < 20) {
        alert("Erro: O Comentário deve ter no mínimo 20 caracteres.");
        return false; 
    }

    // Pesquisa Verifica se algum radio button foi selecionado
    let pesquisaRespondida = false;
    let resposta = "";

    for (let i = 0; i < pesquisaRadios.length; i++) {
        if (pesquisaRadios[i].checked) {
            pesquisaRespondida = true;
            resposta = pesquisaRadios[i].value;
            break;
        }
    }

    if (!pesquisaRespondida) {
        alert("Erro: Responder à Pesquisa é obrigatório.");
        return false;
    }


    if (resposta === "nao") {
        alert("Que bom que você voltou a visitar esta página!");
    } else {
        alert("Volte sempre à está página!");
    }

    return true;
}