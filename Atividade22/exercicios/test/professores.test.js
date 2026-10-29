const { test, before, after, beforeEach } = require('node:test');
const assert = require('node:assert/strict');
const { once } = require('node:events');
const app = require('../app/config/server');

let server;
let baseUrl;
let professores;
let consultas;
let indisponivel;
const conexaoOriginal = app.config.dbConnection;

// Simula somente o SQL Server; as rotas, o modelo e os templates são os da aplicação.
const pool = {
    request() {
        const parametros = {};
        return {
            input(nome, tipo, valor) {
                parametros[nome] = valor;
                return this;
            },
            async query(texto) {
                consultas.push({ texto, parametros });
                const professor = professores.find(item => item.ID_PROFESSOR === parametros.id);
                if (texto.startsWith('SELECT')) {
                    return { recordset: texto.includes('WHERE') ? (professor ? [professor] : []) : [...professores] };
                }
                if (texto.startsWith('INSERT')) {
                    professores.push({ ID_PROFESSOR: 2, NOME_PROFESSOR: parametros.nome, EMAIL_PROFESSOR: parametros.email });
                    return { rowsAffected: [1] };
                }
                if (texto.startsWith('UPDATE') && professor) {
                    professor.NOME_PROFESSOR = parametros.nome;
                    professor.EMAIL_PROFESSOR = parametros.email;
                }
                if (texto.startsWith('DELETE') && professor) {
                    professores = professores.filter(item => item.ID_PROFESSOR !== parametros.id);
                }
                return { rowsAffected: [professor ? 1 : 0] };
            }
        };
    }
};

before(async () => {
    app.config.dbConnection = async () => {
        if (indisponivel) throw new Error('Conexão indisponível no teste');
        return pool;
    };
    server = app.listen(0, '127.0.0.1');
    await once(server, 'listening');
    baseUrl = `http://127.0.0.1:${server.address().port}`;
});

after(async () => {
    app.config.dbConnection = conexaoOriginal;
    await new Promise((resolve, reject) => server.close(err => err ? reject(err) : resolve()));
});

beforeEach(() => {
    professores = [{ ID_PROFESSOR: 1, NOME_PROFESSOR: 'Maria Silva', EMAIL_PROFESSOR: 'maria@fatec.com' }];
    consultas = [];
    indisponivel = false;
});

function post(rota, dados) {
    return fetch(baseUrl + rota, { method: 'POST', body: new URLSearchParams(dados), redirect: 'manual' });
}

test('páginas e aliases de navegação renderizam sem banco', async () => {
    indisponivel = true;
    for (const rota of ['/', '/informacao/home', '/informacao/cursos', '/cursos', '/informacao/historia', '/historia', '/admin/adicionar_usuario', '/adicionar_usuario', '/cadastro', '/admin/adicionar_professor']) {
        const resposta = await fetch(baseUrl + rota);
        assert.equal(resposta.status, 200, rota);
        assert.match(await resposta.text(), /<!DOCTYPE html>/i);
    }
    assert.equal(consultas.length, 0);
});

test('CRUD completo usa o ID solicitado e preserva apóstrofos como parâmetros', async () => {
    for (const rota of ['/informacao/professores', '/professores', '/admin/crud_professores']) {
        const resposta = await fetch(baseUrl + rota);
        assert.equal(resposta.status, 200);
        assert.match(await resposta.text(), /Maria Silva/);
    }

    let resposta = await post('/professor/salvar', { nome_professor: "Ana D'Ávila", email_professor: 'ana@fatec.com' });
    assert.equal(resposta.status, 302);
    assert.equal(resposta.headers.get('location'), '/admin/crud_professores');
    const insercao = consultas.at(-1);
    assert.equal(insercao.parametros.nome, "Ana D'Ávila");
    assert.ok(!insercao.texto.includes("D'Ávila"));

    resposta = await fetch(baseUrl + '/informacao/professores/detalhaprofessor?id=2');
    assert.equal(resposta.status, 200);
    assert.match(await resposta.text(), /ana@fatec.com/);

    resposta = await fetch(baseUrl + '/admin/editar_professor?id=2');
    assert.equal(resposta.status, 200);
    assert.match(await resposta.text(), /value="ana@fatec.com"/);

    resposta = await post('/professor/editar', { id_professor: 2, nome_professor: 'Ana Oliveira', email_professor: 'ana.oliveira@fatec.com' });
    assert.equal(resposta.status, 302);
    resposta = await fetch(baseUrl + '/informacao/professores/detalhaprofessor?id=2');
    assert.match(await resposta.text(), /Ana Oliveira/);

    resposta = await post('/professor/deletar', { id_professor: 2 });
    assert.equal(resposta.status, 302);
    assert.equal(professores.length, 1);
    resposta = await fetch(baseUrl + '/informacao/professores/detalhaprofessor?id=2');
    assert.equal(resposta.status, 404);
});

test('validação impede IDs inválidos e campos fora dos limites sem consultar o banco', async () => {
    for (const id of ['0', '-1', '1 OR 1=1', '2147483648', 'abc', '']) {
        assert.equal((await fetch(baseUrl + '/admin/editar_professor?id=' + encodeURIComponent(id))).status, 400);
        assert.equal((await post('/professor/deletar', { id_professor: id })).status, 400);
        assert.equal((await post('/professor/editar', { id_professor: id })).status, 400);
    }
    for (const dados of [
        { nome_professor: ' ', email_professor: 'ana@fatec.com' },
        { nome_professor: 'A'.repeat(51), email_professor: 'ana@fatec.com' },
        { nome_professor: 'Ana', email_professor: 'email-invalido' },
        { nome_professor: 'Ana', email_professor: 'a'.repeat(100) + '@fatec.com' }
    ]) {
        assert.equal((await post('/professor/salvar', dados)).status, 400);
        assert.equal((await post('/professor/editar', { ...dados, id_professor: 1 })).status, 400);
    }
    assert.equal(consultas.length, 0);
});

test('registros ausentes respondem 404 na edição, nos detalhes e na exclusão', async () => {
    for (const rota of ['/admin/editar_professor?id=999', '/informacao/professores/detalhaprofessor?id=999']) {
        assert.equal((await fetch(baseUrl + rota)).status, 404);
    }
    assert.equal((await post('/professor/deletar', { id_professor: 999 })).status, 404);
    assert.equal((await post('/professor/editar', { id_professor: 999, nome_professor: 'Ana', email_professor: 'ana@fatec.com' })).status, 404);
});

test('lista vazia e conteúdo HTML são renderizados corretamente', async () => {
    professores = [];
    let resposta = await fetch(baseUrl + '/admin/crud_professores');
    assert.match(await resposta.text(), /Nenhum professor cadastrado/);
    professores.push({ ID_PROFESSOR: 1, NOME_PROFESSOR: '<script>alert(1)</script>', EMAIL_PROFESSOR: 'ana@fatec.com' });
    resposta = await fetch(baseUrl + '/informacao/professores');
    const html = await resposta.text();
    assert.ok(!html.includes('<script>alert(1)</script>'));
    assert.match(html, /&lt;script&gt;/);
});

test('falha de conexão retorna 503 nas consultas e operações de escrita', async () => {
    indisponivel = true;
    for (const rota of ['/informacao/professores', '/admin/crud_professores', '/admin/editar_professor?id=1', '/informacao/professores/detalhaprofessor?id=1']) {
        const resposta = await fetch(baseUrl + rota);
        assert.equal(resposta.status, 503);
        assert.match(await resposta.text(), /SQL Server/);
    }
    const dados = { id_professor: 1, nome_professor: 'Ana', email_professor: 'ana@fatec.com' };
    for (const rota of ['/professor/salvar', '/professor/editar', '/professor/deletar']) {
        assert.equal((await post(rota, dados)).status, 503);
    }
});
